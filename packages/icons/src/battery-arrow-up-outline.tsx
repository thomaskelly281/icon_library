import { mdiBatteryArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryArrowUpOutline} {...props} />;
}

export { mdiBatteryArrowUpOutline as path };
