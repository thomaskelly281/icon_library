import { mdiStoreEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreEditOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreEditOutline} {...props} />;
}

export { mdiStoreEditOutline as path };
