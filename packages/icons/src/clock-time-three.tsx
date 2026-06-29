import { mdiClockTimeThree } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeThree(props: IconComponentProps) {
  return <Icon path={mdiClockTimeThree} {...props} />;
}

export { mdiClockTimeThree as path };
