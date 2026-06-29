import { mdiBatteryLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryLockOpen(props: IconComponentProps) {
  return <Icon path={mdiBatteryLockOpen} {...props} />;
}

export { mdiBatteryLockOpen as path };
