import { mdiMessageOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageOff(props: IconComponentProps) {
  return <Icon path={mdiMessageOff} {...props} />;
}

export { mdiMessageOff as path };
