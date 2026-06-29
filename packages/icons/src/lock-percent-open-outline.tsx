import { mdiLockPercentOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockPercentOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiLockPercentOpenOutline} {...props} />;
}

export { mdiLockPercentOpenOutline as path };
