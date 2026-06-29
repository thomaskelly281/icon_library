import { mdiFormatHorizontalAlignCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatHorizontalAlignCenter(props: IconComponentProps) {
  return <Icon path={mdiFormatHorizontalAlignCenter} {...props} />;
}

export { mdiFormatHorizontalAlignCenter as path };
