import { mdiClockTimeElevenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeElevenOutline(props: IconComponentProps) {
  return <Icon path={mdiClockTimeElevenOutline} {...props} />;
}

export { mdiClockTimeElevenOutline as path };
