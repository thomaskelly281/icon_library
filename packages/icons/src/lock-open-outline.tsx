import { mdiLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiLockOpenOutline} {...props} />;
}

export { mdiLockOpenOutline as path };
