import { mdiCarDoorLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarDoorLockOpen(props: IconComponentProps) {
  return <Icon path={mdiCarDoorLockOpen} {...props} />;
}

export { mdiCarDoorLockOpen as path };
