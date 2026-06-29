import { mdiBatteryCharging50 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging50(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging50} {...props} />;
}

export { mdiBatteryCharging50 as path };
