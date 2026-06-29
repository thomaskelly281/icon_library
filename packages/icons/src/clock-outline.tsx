import { mdiClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockOutline(props: IconComponentProps) {
  return <Icon path={mdiClockOutline} {...props} />;
}

export { mdiClockOutline as path };
