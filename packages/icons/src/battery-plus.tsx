import { mdiBatteryPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryPlus(props: IconComponentProps) {
  return <Icon path={mdiBatteryPlus} {...props} />;
}

export { mdiBatteryPlus as path };
