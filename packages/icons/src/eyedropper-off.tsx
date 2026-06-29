import { mdiEyedropperOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyedropperOff(props: IconComponentProps) {
  return <Icon path={mdiEyedropperOff} {...props} />;
}

export { mdiEyedropperOff as path };
