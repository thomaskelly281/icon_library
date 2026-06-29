import { mdiBatteryMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryMinus(props: IconComponentProps) {
  return <Icon path={mdiBatteryMinus} {...props} />;
}

export { mdiBatteryMinus as path };
