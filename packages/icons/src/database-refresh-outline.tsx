import { mdiDatabaseRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseRefreshOutline} {...props} />;
}

export { mdiDatabaseRefreshOutline as path };
