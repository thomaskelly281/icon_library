import { mdiStoreMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreMarkerOutline} {...props} />;
}

export { mdiStoreMarkerOutline as path };
