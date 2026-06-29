import { mdiEyeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeOff(props: IconComponentProps) {
  return <Icon path={mdiEyeOff} {...props} />;
}

export { mdiEyeOff as path };
