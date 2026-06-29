import { mdiFormatVerticalAlignTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatVerticalAlignTop(props: IconComponentProps) {
  return <Icon path={mdiFormatVerticalAlignTop} {...props} />;
}

export { mdiFormatVerticalAlignTop as path };
