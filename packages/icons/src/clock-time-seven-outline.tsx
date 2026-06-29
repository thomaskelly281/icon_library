import { mdiClockTimeSevenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeSevenOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeSevenOutline} {...props} />;
}

export { mdiClockTimeSevenOutline as path };
