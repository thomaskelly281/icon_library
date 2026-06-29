import { mdiBatteryMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryMedium(props: IconComponentProps) {
  return <Icon path={mdiBatteryMedium} {...props} />;
}

export { mdiBatteryMedium as path };
