import { mdiDatabaseArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseArrowLeftOutline} {...props} />;
}

export { mdiDatabaseArrowLeftOutline as path };
