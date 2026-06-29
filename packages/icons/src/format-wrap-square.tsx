import { mdiFormatWrapSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatWrapSquare(props: IconComponentProps) {
  return <Icon path={mdiFormatWrapSquare} {...props} />;
}

export { mdiFormatWrapSquare as path };
