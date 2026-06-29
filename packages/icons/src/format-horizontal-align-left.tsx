import { mdiFormatHorizontalAlignLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatHorizontalAlignLeft(props: IconComponentProps) {
  return <Icon path={mdiFormatHorizontalAlignLeft} {...props} />;
}

export { mdiFormatHorizontalAlignLeft as path };
