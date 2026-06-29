import { mdiClockTimeTenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeTenOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeTenOutline} {...props} />;
}

export { mdiClockTimeTenOutline as path };
