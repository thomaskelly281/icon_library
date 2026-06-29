import { mdiFormatColorText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatColorText(props: IconComponentProps) {
  return <Icon path={mdiFormatColorText} {...props} />;
}

export { mdiFormatColorText as path };
