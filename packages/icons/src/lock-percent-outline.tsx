import { mdiLockPercentOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockPercentOutline(props: IconComponentProps) {
  return <Icon path={mdiLockPercentOutline} {...props} />;
}

export { mdiLockPercentOutline as path };
