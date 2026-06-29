import { mdiAccountLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountLockOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountLockOutline} {...props} />;
}

export { mdiAccountLockOutline as path };
