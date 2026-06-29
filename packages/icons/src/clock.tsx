import { mdiClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Clock(props: IconComponentProps) {
  return <Icon path={mdiClock} {...props} />;
}

export { mdiClock as path };
