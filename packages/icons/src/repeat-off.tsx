import { mdiRepeatOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RepeatOff(props: IconComponentProps) {
  return <Icon path={mdiRepeatOff} {...props} />;
}

export { mdiRepeatOff as path };
