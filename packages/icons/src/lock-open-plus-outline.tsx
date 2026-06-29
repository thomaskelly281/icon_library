import { mdiLockOpenPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiLockOpenPlusOutline} {...props} />;
}

export { mdiLockOpenPlusOutline as path };
