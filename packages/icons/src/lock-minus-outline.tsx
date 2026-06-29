import { mdiLockMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiLockMinusOutline} {...props} />;
}

export { mdiLockMinusOutline as path };
