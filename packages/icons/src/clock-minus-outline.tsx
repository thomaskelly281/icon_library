import { mdiClockMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiClockMinusOutline} {...props} />;
}

export { mdiClockMinusOutline as path };
