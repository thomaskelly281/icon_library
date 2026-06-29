import { mdiFormatColorMarkerCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatColorMarkerCancel(props: IconComponentProps) {
  return <Icon path={mdiFormatColorMarkerCancel} {...props} />;
}

export { mdiFormatColorMarkerCancel as path };
