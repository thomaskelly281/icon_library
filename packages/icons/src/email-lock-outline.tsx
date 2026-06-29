import { mdiEmailLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailLockOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailLockOutline} {...props} />;
}

export { mdiEmailLockOutline as path };
