import { mdiLockOpenVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenVariant(props: IconComponentProps) {
  return <Icon path={mdiLockOpenVariant} {...props} />;
}

export { mdiLockOpenVariant as path };
