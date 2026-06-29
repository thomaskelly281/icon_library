import { mdiSunClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunClock(props: IconComponentProps) {
  return <Icon path={mdiSunClock} {...props} />;
}

export { mdiSunClock as path };
