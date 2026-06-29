import { mdiDatabaseCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseCogOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseCogOutline} {...props} />;
}

export { mdiDatabaseCogOutline as path };
