import { mdiClockCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiClockCheckOutline} {...props} />;
}

export { mdiClockCheckOutline as path };
