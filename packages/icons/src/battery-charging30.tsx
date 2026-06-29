import { mdiBatteryCharging30 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging30(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging30} {...props} />;
}

export { mdiBatteryCharging30 as path };
