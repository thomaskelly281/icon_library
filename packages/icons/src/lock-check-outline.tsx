import { mdiLockCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiLockCheckOutline} {...props} />;
}

export { mdiLockCheckOutline as path };
