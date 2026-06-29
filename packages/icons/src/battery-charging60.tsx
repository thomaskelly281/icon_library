import { mdiBatteryCharging60 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging60(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging60} {...props} />;
}

export { mdiBatteryCharging60 as path };
