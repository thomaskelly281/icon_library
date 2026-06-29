import type { CSSProperties } from "react";
import Icon from "@mdi/react";

export interface IconPreviewProps {
  path: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

function toMdiSize(size: number | string): number | string {
  return typeof size === "number" ? `${size}px` : size;
}

export function IconPreview({
  path,
  size = 24,
  className,
  style,
}: IconPreviewProps) {
  return (
    <Icon
      path={path}
      size={toMdiSize(size)}
      color="currentColor"
      className={className}
      style={style}
    />
  );
}
