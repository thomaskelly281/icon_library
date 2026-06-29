import { mdiDatabaseExportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseExportOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseExportOutline} {...props} />;
}

export { mdiDatabaseExportOutline as path };
