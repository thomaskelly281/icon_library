import { mdiEyedropperMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyedropperMinus(props: IconComponentProps) {
  return <Icon path={mdiEyedropperMinus} {...props} />;
}

export { mdiEyedropperMinus as path };
