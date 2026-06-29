import { mdiBatteryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryOutline} {...props} />;
}

export { mdiBatteryOutline as path };
