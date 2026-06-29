import { mdiDoorSlidingLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DoorSlidingLock(props: IconComponentProps) {
  return <Icon path={mdiDoorSlidingLock} {...props} />;
}

export { mdiDoorSlidingLock as path };
