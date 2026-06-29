import { mdiLockOpenCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiLockOpenCheckOutline} {...props} />;
}

export { mdiLockOpenCheckOutline as path };
