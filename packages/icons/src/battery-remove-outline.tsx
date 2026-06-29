import { mdiBatteryRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryRemoveOutline} {...props} />;
}

export { mdiBatteryRemoveOutline as path };
