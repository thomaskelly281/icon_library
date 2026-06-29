import { mdiLockOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOffOutline(props: IconComponentProps) {
  return <Icon path={mdiLockOffOutline} {...props} />;
}

export { mdiLockOffOutline as path };
