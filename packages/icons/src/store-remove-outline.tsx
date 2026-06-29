import { mdiStoreRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreRemoveOutline} {...props} />;
}

export { mdiStoreRemoveOutline as path };
