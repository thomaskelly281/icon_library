import { mdiDoorClosedLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DoorClosedLock(props: IconComponentProps) {
  return <Icon path={mdiDoorClosedLock} {...props} />;
}

export { mdiDoorClosedLock as path };
