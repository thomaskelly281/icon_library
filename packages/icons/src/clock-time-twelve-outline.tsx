import { mdiClockTimeTwelveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeTwelveOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeTwelveOutline} {...props} />;
}

export { mdiClockTimeTwelveOutline as path };
