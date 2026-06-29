import { mdiBatteryPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryPlusOutline} {...props} />;
}

export { mdiBatteryPlusOutline as path };
