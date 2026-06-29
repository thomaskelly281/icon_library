import { mdiEyeLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeLockOpen(props: IconComponentProps) {
  return <Icon path={mdiEyeLockOpen} {...props} />;
}

export { mdiEyeLockOpen as path };
