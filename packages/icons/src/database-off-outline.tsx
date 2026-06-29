import { mdiDatabaseOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseOffOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseOffOutline} {...props} />;
}

export { mdiDatabaseOffOutline as path };
