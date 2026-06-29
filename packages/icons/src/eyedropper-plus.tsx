import { mdiEyedropperPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyedropperPlus(props: IconComponentProps) {
  return <Icon path={mdiEyedropperPlus} {...props} />;
}

export { mdiEyedropperPlus as path };
