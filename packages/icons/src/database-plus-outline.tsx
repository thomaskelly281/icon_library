import { mdiDatabasePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabasePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabasePlusOutline} {...props} />;
}

export { mdiDatabasePlusOutline as path };
