import { mdiLockOpenAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiLockOpenAlertOutline} {...props} />;
}

export { mdiLockOpenAlertOutline as path };
