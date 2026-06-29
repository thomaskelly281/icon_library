import { mdiBatteryArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryArrowDown(props: IconComponentProps) {
  return <Icon path={mdiBatteryArrowDown} {...props} />;
}

export { mdiBatteryArrowDown as path };
