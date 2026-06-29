import { mdiFormatColorHighlight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatColorHighlight(props: IconComponentProps) {
  return <Icon path={mdiFormatColorHighlight} {...props} />;
}

export { mdiFormatColorHighlight as path };
