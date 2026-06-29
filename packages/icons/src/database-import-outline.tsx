import { mdiDatabaseImportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseImportOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseImportOutline} {...props} />;
}

export { mdiDatabaseImportOutline as path };
