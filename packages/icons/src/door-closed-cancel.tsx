import { mdiDoorClosedCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DoorClosedCancel(props: IconComponentProps) {
  return <Icon path={mdiDoorClosedCancel} {...props} />;
}

export { mdiDoorClosedCancel as path };
