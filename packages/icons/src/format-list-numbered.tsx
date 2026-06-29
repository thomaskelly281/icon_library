import { mdiFormatListNumbered } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListNumbered(props: IconComponentProps) {
  return <Icon path={mdiFormatListNumbered} {...props} />;
}

export { mdiFormatListNumbered as path };
