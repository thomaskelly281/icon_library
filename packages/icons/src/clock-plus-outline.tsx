import { mdiClockPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiClockPlusOutline} {...props} />;
}

export { mdiClockPlusOutline as path };
