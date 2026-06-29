import { mdiLockOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOff(props: IconComponentProps) {
  return <Icon path={mdiLockOff} {...props} />;
}

export { mdiLockOff as path };
