import { mdiClockTimeEight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeEight(props: IconComponentProps) {
  return <Icon path={mdiClockTimeEight} {...props} />;
}

export { mdiClockTimeEight as path };
