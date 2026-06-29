import { mdiBatteryArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryArrowUp(props: IconComponentProps) {
  return <Icon path={mdiBatteryArrowUp} {...props} />;
}

export { mdiBatteryArrowUp as path };
