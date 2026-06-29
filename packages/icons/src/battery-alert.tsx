import { mdiBatteryAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryAlert(props: IconComponentProps) {
  return <Icon path={mdiBatteryAlert} {...props} />;
}

export { mdiBatteryAlert as path };
