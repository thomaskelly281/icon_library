import { mdiMotorbikeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotorbikeOff(props: IconComponentProps) {
  return <Icon path={mdiMotorbikeOff} {...props} />;
}

export { mdiMotorbikeOff as path };
