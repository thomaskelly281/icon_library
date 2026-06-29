import { mdiBatteryOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryOffOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryOffOutline} {...props} />;
}

export { mdiBatteryOffOutline as path };
