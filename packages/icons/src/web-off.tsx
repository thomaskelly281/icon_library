import { mdiWebOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebOff(props: IconComponentProps) {
  return <Icon path={mdiWebOff} {...props} />;
}

export { mdiWebOff as path };
