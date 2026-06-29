import { mdiFormatListGroup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListGroup(props: IconComponentProps) {
  return <Icon path={mdiFormatListGroup} {...props} />;
}

export { mdiFormatListGroup as path };
