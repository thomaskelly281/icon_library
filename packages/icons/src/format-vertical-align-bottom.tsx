import { mdiFormatVerticalAlignBottom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatVerticalAlignBottom(props: IconComponentProps) {
  return <Icon path={mdiFormatVerticalAlignBottom} {...props} />;
}

export { mdiFormatVerticalAlignBottom as path };
