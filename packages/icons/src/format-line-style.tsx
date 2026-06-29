import { mdiFormatLineStyle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLineStyle(props: IconComponentProps) {
  return <Icon path={mdiFormatLineStyle} {...props} />;
}

export { mdiFormatLineStyle as path };
