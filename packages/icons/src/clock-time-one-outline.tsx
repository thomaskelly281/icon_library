import { mdiClockTimeOneOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeOneOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeOneOutline} {...props} />;
}

export { mdiClockTimeOneOutline as path };
