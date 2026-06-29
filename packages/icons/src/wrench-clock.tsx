import { mdiWrenchClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WrenchClock(props: IconComponentProps) {
  return <Icon path={mdiWrenchClock} {...props} />;
}

export { mdiWrenchClock as path };
