import { mdiDrone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Drone(props: IconComponentProps) {
  return <Icon path={mdiDrone} {...props} />;
}

export { mdiDrone as path };
