import { mdiDatabaseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseOutline} {...props} />;
}

export { mdiDatabaseOutline as path };
