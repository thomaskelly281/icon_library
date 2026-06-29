import { mdiDatabaseSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseSearchOutline} {...props} />;
}

export { mdiDatabaseSearchOutline as path };
