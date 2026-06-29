import { mdiBatteryAlertVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryAlertVariant(props: IconComponentProps) {
  return <Icon path={mdiBatteryAlertVariant} {...props} />;
}

export { mdiBatteryAlertVariant as path };
