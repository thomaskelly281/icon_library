import { mdiLockPercentOpenVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockPercentOpenVariant(props: IconComponentProps) {
  return <Icon path={mdiLockPercentOpenVariant} {...props} />;
}

export { mdiLockPercentOpenVariant as path };
