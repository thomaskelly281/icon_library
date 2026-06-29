import MdiIcon from "@mdi/react";
import type { CSSProperties, HTMLAttributes } from "react";

export type IconComponentProps = Omit<
  HTMLAttributes<SVGElement>,
  "color"
> & {
  size?: number | string;
  color?: string;
  title?: string | null;
  horizontal?: boolean;
  vertical?: boolean;
  rotate?: number;
  spin?: boolean | number;
  style?: CSSProperties;
};

type IconInternalProps = IconComponentProps & {
  path: string;
};

function toMdiSize(size: number | string): number | string {
  return typeof size === "number" ? `${size}px` : size;
}

export function Icon({
  path,
  size = 24,
  color = "currentColor",
  title,
  horizontal,
  vertical,
  rotate,
  spin,
  style,
  className,
  ...rest
}: IconInternalProps) {
  return (
    <MdiIcon
      path={path}
      size={toMdiSize(size)}
      color={color}
      title={title}
      horizontal={horizontal}
      vertical={vertical}
      rotate={rotate}
      spin={spin}
      style={style}
      className={className}
      {...rest}
    />
  );
}

/** @deprecated Use IconComponentProps for generated icon components */
export type IconProps = IconComponentProps;
