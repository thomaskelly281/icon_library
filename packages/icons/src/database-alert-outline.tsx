import { mdiDatabaseAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseAlertOutline} {...props} />;
}

export { mdiDatabaseAlertOutline as path };
