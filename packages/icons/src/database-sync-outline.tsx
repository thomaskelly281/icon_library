import { mdiDatabaseSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseSyncOutline} {...props} />;
}

export { mdiDatabaseSyncOutline as path };
