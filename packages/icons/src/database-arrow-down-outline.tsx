import { mdiDatabaseArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseArrowDownOutline} {...props} />;
}

export { mdiDatabaseArrowDownOutline as path };
