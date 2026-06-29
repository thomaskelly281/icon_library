import { mdiSteeringOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SteeringOff(props: IconComponentProps) {
  return <Icon path={mdiSteeringOff} {...props} />;
}

export { mdiSteeringOff as path };
