import { mdiEyedropperRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyedropperRemove(props: IconComponentProps) {
  return <Icon path={mdiEyedropperRemove} {...props} />;
}

export { mdiEyedropperRemove as path };
