import { mdiDatabaseMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseMinusOutline} {...props} />;
}

export { mdiDatabaseMinusOutline as path };
