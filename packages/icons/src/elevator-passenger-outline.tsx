import { mdiElevatorPassengerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElevatorPassengerOutline(props: IconComponentProps) {
  return <Icon path={mdiElevatorPassengerOutline} {...props} />;
}

export { mdiElevatorPassengerOutline as path };
