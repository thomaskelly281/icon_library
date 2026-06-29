import { mdiClockTimeTwelve } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeTwelve(props: IconComponentProps) {
  return <Icon path={mdiClockTimeTwelve} {...props} />;
}

export { mdiClockTimeTwelve as path };
