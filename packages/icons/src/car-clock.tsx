import { mdiCarClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarClock(props: IconComponentProps) {
  return <Icon path={mdiCarClock} {...props} />;
}

export { mdiCarClock as path };
