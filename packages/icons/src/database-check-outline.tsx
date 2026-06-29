import { mdiDatabaseCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseCheckOutline} {...props} />;
}

export { mdiDatabaseCheckOutline as path };
