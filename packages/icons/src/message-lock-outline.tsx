import { mdiMessageLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageLockOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageLockOutline} {...props} />;
}

export { mdiMessageLockOutline as path };
