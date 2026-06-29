import { mdiClockTimeSixOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeSixOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeSixOutline} {...props} />;
}

export { mdiClockTimeSixOutline as path };
