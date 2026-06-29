import { mdiBatteryCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCheck(props: IconComponentProps) {
  return <Icon path={mdiBatteryCheck} {...props} />;
}

export { mdiBatteryCheck as path };
