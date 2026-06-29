import { mdiLockRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiLockRemoveOutline} {...props} />;
}

export { mdiLockRemoveOutline as path };
