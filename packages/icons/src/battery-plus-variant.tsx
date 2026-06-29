import { mdiBatteryPlusVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryPlusVariant(props: IconComponentProps) {
  return <Icon path={mdiBatteryPlusVariant} {...props} />;
}

export { mdiBatteryPlusVariant as path };
