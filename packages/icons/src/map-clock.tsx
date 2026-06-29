import { mdiMapClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapClock(props: IconComponentProps) {
  return <Icon path={mdiMapClock} {...props} />;
}

export { mdiMapClock as path };
