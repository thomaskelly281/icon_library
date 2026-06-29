import { mdiBatterySync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatterySync(props: IconComponentProps) {
  return <Icon path={mdiBatterySync} {...props} />;
}

export { mdiBatterySync as path };
