import { mdiClockEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockEditOutline(props: IconComponentProps) {
  return <Icon path={mdiClockEditOutline} {...props} />;
}

export { mdiClockEditOutline as path };
