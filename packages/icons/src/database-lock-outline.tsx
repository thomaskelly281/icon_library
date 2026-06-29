import { mdiDatabaseLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseLockOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseLockOutline} {...props} />;
}

export { mdiDatabaseLockOutline as path };
