import { mdiMouseBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseBluetooth(props: IconComponentProps) {
  return <Icon path={mdiMouseBluetooth} {...props} />;
}

export { mdiMouseBluetooth as path };
