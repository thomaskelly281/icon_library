"use client";

import { mdiDownload } from "@mdi/js";
import { useCallback, useState } from "react";

import { IconPreview } from "@/components/icon-preview";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Icon } from "@/lib/icon";
import {
  buildImportSnippet,
  buildUsageSnippet,
  downloadSvg,
} from "@/lib/icon-svg";
import type { IconManifestEntry } from "@/lib/types";

interface IconDetailDialogProps {
  icon: IconManifestEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function IconDetailDialog({
  icon,
  open,
  onOpenChange,
}: IconDetailDialogProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!icon) {
      return;
    }

    await navigator.clipboard.writeText(
      buildUsageSnippet(icon.slug, icon.component),
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, [icon]);

  const handleDownload = useCallback(() => {
    if (!icon) {
      return;
    }

    downloadSvg(icon.path, icon.slug);
  }, [icon]);

  if (!icon) {
    return null;
  }

  const importSnippet = buildImportSnippet(icon.slug, icon.component);
  const usageSnippet = `<${icon.component} size={24} />`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        size="lg"
        className="flex max-h-[calc(100svh-2rem)] flex-col overflow-hidden sm:max-w-lg"
      >
        <DialogHeader className="shrink-0">
          <DialogTitle className="font-mono break-all">{icon.slug}</DialogTitle>
          <DialogDescription>
            Import as{" "}
            <span className="font-medium text-foreground">{icon.component}</span>
            {" · "}
            {icon.origin === "svg" ? "Custom" : "MDI"}
          </DialogDescription>
        </DialogHeader>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto">
          <div className="flex shrink-0 items-center justify-center rounded-lg bg-muted/30 px-8 py-10">
            <IconPreview
              path={icon.path}
              size={64}
              className="size-16 shrink-0 text-foreground"
            />
          </div>

          <pre className="min-w-0 overflow-x-auto rounded-lg bg-muted/40 p-4 font-mono text-xs leading-relaxed text-foreground">
            <code className="block whitespace-pre">{importSnippet}</code>
            {"\n"}
            <code className="block whitespace-pre">{usageSnippet}</code>
          </pre>
        </div>

        <DialogFooter className="shrink-0">
          <Button
            type="button"
            variant="outline"
            colorScheme="neutral"
            onClick={() => void handleCopy()}
          >
            {copied ? "Copied" : "Copy snippet"}
          </Button>
          <Button type="button" onClick={handleDownload}>
            <Icon path={mdiDownload} />
            Download as SVG
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
