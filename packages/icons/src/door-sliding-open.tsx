import { mdiDoorSlidingOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DoorSlidingOpen(props: IconComponentProps) {
  return <Icon path={mdiDoorSlidingOpen} {...props} />;
}

export { mdiDoorSlidingOpen as path };
