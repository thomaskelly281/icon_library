import { mdiLockOpenMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiLockOpenMinusOutline} {...props} />;
}

export { mdiLockOpenMinusOutline as path };
