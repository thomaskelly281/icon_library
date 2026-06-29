import { mdiLockSmart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockSmart(props: IconComponentProps) {
  return <Icon path={mdiLockSmart} {...props} />;
}

export { mdiLockSmart as path };
