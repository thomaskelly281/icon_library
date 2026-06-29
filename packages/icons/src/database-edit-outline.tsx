import { mdiDatabaseEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseEditOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseEditOutline} {...props} />;
}

export { mdiDatabaseEditOutline as path };
