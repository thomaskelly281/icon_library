import { mdiDatabaseSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseSettingsOutline} {...props} />;
}

export { mdiDatabaseSettingsOutline as path };
