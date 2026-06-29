import { mdiClockTimeTwoOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeTwoOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeTwoOutline} {...props} />;
}

export { mdiClockTimeTwoOutline as path };
