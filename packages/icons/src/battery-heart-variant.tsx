import { mdiBatteryHeartVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryHeartVariant(props: IconComponentProps) {
  return <Icon path={mdiBatteryHeartVariant} {...props} />;
}

export { mdiBatteryHeartVariant as path };
