import { mdiSendLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendLockOutline(props: IconComponentProps) {
  return <Icon path={mdiSendLockOutline} {...props} />;
}

export { mdiSendLockOutline as path };
