import { mdiEyeLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeLock(props: IconComponentProps) {
  return <Icon path={mdiEyeLock} {...props} />;
}

export { mdiEyeLock as path };
