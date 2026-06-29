import { mdiBatteryOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryOff(props: IconComponentProps) {
  return <Icon path={mdiBatteryOff} {...props} />;
}

export { mdiBatteryOff as path };
