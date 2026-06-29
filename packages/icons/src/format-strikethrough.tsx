import { mdiFormatStrikethrough } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatStrikethrough(props: IconComponentProps) {
  return <Icon path={mdiFormatStrikethrough} {...props} />;
}

export { mdiFormatStrikethrough as path };
