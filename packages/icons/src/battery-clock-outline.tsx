import { mdiBatteryClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryClockOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryClockOutline} {...props} />;
}

export { mdiBatteryClockOutline as path };
