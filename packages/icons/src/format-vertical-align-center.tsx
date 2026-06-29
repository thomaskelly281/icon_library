import { mdiFormatVerticalAlignCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatVerticalAlignCenter(props: IconComponentProps) {
  return <Icon path={mdiFormatVerticalAlignCenter} {...props} />;
}

export { mdiFormatVerticalAlignCenter as path };
