import { mdiLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOutline(props: IconComponentProps) {
  return <Icon path={mdiLockOutline} {...props} />;
}

export { mdiLockOutline as path };
