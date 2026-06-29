import { mdiClockAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiClockAlertOutline} {...props} />;
}

export { mdiClockAlertOutline as path };
