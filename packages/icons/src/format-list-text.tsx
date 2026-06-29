import { mdiFormatListText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListText(props: IconComponentProps) {
  return <Icon path={mdiFormatListText} {...props} />;
}

export { mdiFormatListText as path };
