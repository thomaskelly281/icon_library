import { mdiMessageTextLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageTextLockOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageTextLockOutline} {...props} />;
}

export { mdiMessageTextLockOutline as path };
