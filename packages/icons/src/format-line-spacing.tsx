import { mdiFormatLineSpacing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLineSpacing(props: IconComponentProps) {
  return <Icon path={mdiFormatLineSpacing} {...props} />;
}

export { mdiFormatLineSpacing as path };
