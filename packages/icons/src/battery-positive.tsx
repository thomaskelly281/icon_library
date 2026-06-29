import { mdiBatteryPositive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryPositive(props: IconComponentProps) {
  return <Icon path={mdiBatteryPositive} {...props} />;
}

export { mdiBatteryPositive as path };
