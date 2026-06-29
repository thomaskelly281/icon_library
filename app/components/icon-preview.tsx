import { Icon } from "@/lib/icon";
import { cn } from "@/lib/utils";

export interface IconPreviewProps {
  path: string;
  size?: number;
  className?: string;
}

export function IconPreview({
  path,
  size = 24,
  className,
}: IconPreviewProps) {
  return (
    <Icon
      path={path}
      size={size / 24}
      className={cn("size-7 max-h-7 max-w-7 shrink-0 text-foreground", className)}
      aria-hidden="true"
    />
  );
}
