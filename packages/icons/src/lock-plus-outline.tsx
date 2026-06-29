import { mdiLockPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiLockPlusOutline} {...props} />;
}

export { mdiLockPlusOutline as path };
