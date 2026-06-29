import { mdiBatteryCharging20 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCharging20(props: IconComponentProps) {
  return <Icon path={mdiBatteryCharging20} {...props} />;
}

export { mdiBatteryCharging20 as path };
