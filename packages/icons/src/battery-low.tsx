import { mdiBatteryLow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryLow(props: IconComponentProps) {
  return <Icon path={mdiBatteryLow} {...props} />;
}

export { mdiBatteryLow as path };
