import { mdiClockTimeFiveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeFiveOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeFiveOutline} {...props} />;
}

export { mdiClockTimeFiveOutline as path };
