import { mdiDatabaseRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseRemoveOutline} {...props} />;
}

export { mdiDatabaseRemoveOutline as path };
