import { mdiCarDoorLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarDoorLock(props: IconComponentProps) {
  return <Icon path={mdiCarDoorLock} {...props} />;
}

export { mdiCarDoorLock as path };
