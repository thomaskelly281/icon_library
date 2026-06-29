import { mdiDoorClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DoorClosed(props: IconComponentProps) {
  return <Icon path={mdiDoorClosed} {...props} />;
}

export { mdiDoorClosed as path };
