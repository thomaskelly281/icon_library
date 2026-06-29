import { mdiBatteryRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryRemove(props: IconComponentProps) {
  return <Icon path={mdiBatteryRemove} {...props} />;
}

export { mdiBatteryRemove as path };
