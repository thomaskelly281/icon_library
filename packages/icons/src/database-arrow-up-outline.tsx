import { mdiDatabaseArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseArrowUpOutline} {...props} />;
}

export { mdiDatabaseArrowUpOutline as path };
