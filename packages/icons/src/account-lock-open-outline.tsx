import { mdiAccountLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountLockOpenOutline} {...props} />;
}

export { mdiAccountLockOpenOutline as path };
