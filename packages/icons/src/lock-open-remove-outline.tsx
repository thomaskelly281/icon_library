import { mdiLockOpenRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiLockOpenRemoveOutline} {...props} />;
}

export { mdiLockOpenRemoveOutline as path };
