import { mdiBatteryCharging } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging} {...props} />;
}

export { mdiBatteryCharging as path };
