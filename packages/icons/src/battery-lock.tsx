import { mdiBatteryLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryLock(props: IconComponentProps) {
  return <Icon path={mdiBatteryLock} {...props} />;
}

export { mdiBatteryLock as path };
