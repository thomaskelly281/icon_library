import { mdiElevator } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Elevator(props: IconComponentProps) {
  return <Icon path={mdiElevator} {...props} />;
}

export { mdiElevator as path };
