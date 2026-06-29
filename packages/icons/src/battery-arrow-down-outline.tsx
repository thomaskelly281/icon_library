import { mdiBatteryArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryArrowDownOutline} {...props} />;
}

export { mdiBatteryArrowDownOutline as path };
