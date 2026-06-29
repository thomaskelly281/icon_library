import { mdiBatteryUnknown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryUnknown(props: IconComponentProps) {
  return <Icon path={mdiBatteryUnknown} {...props} />;
}

export { mdiBatteryUnknown as path };
