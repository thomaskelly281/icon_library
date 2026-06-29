import { mdiBatteryHigh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryHigh(props: IconComponentProps) {
  return <Icon path={mdiBatteryHigh} {...props} />;
}

export { mdiBatteryHigh as path };
