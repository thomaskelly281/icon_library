import { mdiDoorOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DoorOpen(props: IconComponentProps) {
  return <Icon path={mdiDoorOpen} {...props} />;
}

export { mdiDoorOpen as path };
