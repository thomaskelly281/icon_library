import { mdiBatteryCharging10 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging10(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging10} {...props} />;
}

export { mdiBatteryCharging10 as path };
