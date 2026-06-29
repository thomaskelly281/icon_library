import { mdiBatteryCharging80 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging80(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging80} {...props} />;
}

export { mdiBatteryCharging80 as path };
