import { mdiDoorbell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Doorbell(props: IconComponentProps) {
  return <Icon path={mdiDoorbell} {...props} />;
}

export { mdiDoorbell as path };
