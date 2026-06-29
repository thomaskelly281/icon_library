import { mdiDoorSliding } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DoorSliding(props: IconComponentProps) {
  return <Icon path={mdiDoorSliding} {...props} />;
}

export { mdiDoorSliding as path };
