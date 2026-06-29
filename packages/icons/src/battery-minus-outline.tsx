import { mdiBatteryMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryMinusOutline} {...props} />;
}

export { mdiBatteryMinusOutline as path };
