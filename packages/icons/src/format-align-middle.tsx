import { mdiFormatAlignMiddle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatAlignMiddle(props: IconComponentProps) {
  return <Icon path={mdiFormatAlignMiddle} {...props} />;
}

export { mdiFormatAlignMiddle as path };
