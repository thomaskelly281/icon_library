import { mdiFormatStrikethroughVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatStrikethroughVariant(props: IconComponentProps) {
  return <Icon path={mdiFormatStrikethroughVariant} {...props} />;
}

export { mdiFormatStrikethroughVariant as path };
