import { mdiBatteryCharging90 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging90(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging90} {...props} />;
}

export { mdiBatteryCharging90 as path };
