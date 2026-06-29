import { mdiLockPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockPercent(props: IconComponentProps) {
  return <Icon path={mdiLockPercent} {...props} />;
}

export { mdiLockPercent as path };
