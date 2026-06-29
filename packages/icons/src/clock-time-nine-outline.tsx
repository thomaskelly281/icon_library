import { mdiClockTimeNineOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeNineOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeNineOutline} {...props} />;
}

export { mdiClockTimeNineOutline as path };
