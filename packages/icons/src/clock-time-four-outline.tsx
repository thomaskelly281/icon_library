import { mdiClockTimeFourOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeFourOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeFourOutline} {...props} />;
}

export { mdiClockTimeFourOutline as path };
