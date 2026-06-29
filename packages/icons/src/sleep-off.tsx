import { mdiSleepOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SleepOff(props: IconComponentProps) {
  return <Icon path={mdiSleepOff} {...props} />;
}

export { mdiSleepOff as path };
