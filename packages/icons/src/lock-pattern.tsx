import { mdiLockPattern } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockPattern(props: IconComponentProps) {
  return <Icon path={mdiLockPattern} {...props} />;
}

export { mdiLockPattern as path };
