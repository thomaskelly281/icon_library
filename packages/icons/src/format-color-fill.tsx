import { mdiFormatColorFill } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatColorFill(props: IconComponentProps) {
  return <Icon path={mdiFormatColorFill} {...props} />;
}

export { mdiFormatColorFill as path };
