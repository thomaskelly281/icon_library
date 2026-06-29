import { mdiHeartOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartOff(props: IconComponentProps) {
  return <Icon path={mdiHeartOff} {...props} />;
}

export { mdiHeartOff as path };
