import { mdiDatabaseMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseMarkerOutline} {...props} />;
}

export { mdiDatabaseMarkerOutline as path };
