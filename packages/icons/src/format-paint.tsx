import { mdiFormatPaint } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatPaint(props: IconComponentProps) {
  return <Icon path={mdiFormatPaint} {...props} />;
}

export { mdiFormatPaint as path };
