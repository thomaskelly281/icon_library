import { mdiLockAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiLockAlertOutline} {...props} />;
}

export { mdiLockAlertOutline as path };
