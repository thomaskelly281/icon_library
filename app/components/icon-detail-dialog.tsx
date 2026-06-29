"use client";

import { useCallback, useState } from "react";
import { DownloadIcon } from "lucide-react";
import { IconPreview } from "@/app/components/icon-preview";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

    await navigator.clipboard.writeText(buildUsageSnippet(icon.slug, icon.component));
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-lg">
        <DialogHeader className="border-b px-6 py-5">
          <DialogTitle className="font-mono text-lg">{icon.slug}</DialogTitle>
          <DialogDescription>
            Import as <span className="font-medium text-foreground">{icon.component}</span>
            {" · "}
            {icon.origin === "svg" ? "Contributed SVG" : "MDI seed"}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 px-6 py-6">
          <div className="flex items-center justify-center rounded-xl border bg-muted/30 px-8 py-10">
            <IconPreview path={icon.path} size={64} className="size-16 text-foreground" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium">Import</p>
              <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
                {copied ? "Copied" : "Copy snippet"}
              </Button>
            </div>
            <pre className="overflow-x-auto rounded-lg border bg-muted/40 p-4 font-mono text-xs leading-relaxed text-foreground">
              <code>{importSnippet}</code>
              {"\n\n"}
              <code>{`<${icon.component} size={24} />`}</code>
            </pre>
          </div>

          <Button type="button" onClick={handleDownload} className="w-full">
            <DownloadIcon />
            Download SVG
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
