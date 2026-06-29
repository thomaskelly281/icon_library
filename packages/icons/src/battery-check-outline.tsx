import { mdiBatteryCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryCheckOutline} {...props} />;
}

export { mdiBatteryCheckOutline as path };
