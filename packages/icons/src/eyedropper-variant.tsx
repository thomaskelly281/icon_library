import { mdiEyedropperVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyedropperVariant(props: IconComponentProps) {
  return <Icon path={mdiEyedropperVariant} {...props} />;
}

export { mdiEyedropperVariant as path };
