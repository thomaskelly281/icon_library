import { mdiClockRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiClockRemoveOutline} {...props} />;
}

export { mdiClockRemoveOutline as path };
