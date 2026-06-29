import { mdiBatteryNegative } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryNegative(props: IconComponentProps) {
  return <Icon path={mdiBatteryNegative} {...props} />;
}

export { mdiBatteryNegative as path };
