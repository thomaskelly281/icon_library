import { mdiLeakOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LeakOff(props: IconComponentProps) {
  return <Icon path={mdiLeakOff} {...props} />;
}

export { mdiLeakOff as path };
