import { mdiBatteryCharging100 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging100(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging100} {...props} />;
}

export { mdiBatteryCharging100 as path };
