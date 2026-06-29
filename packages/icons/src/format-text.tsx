import { mdiFormatText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatText(props: IconComponentProps) {
  return <Icon path={mdiFormatText} {...props} />;
}

export { mdiFormatText as path };
