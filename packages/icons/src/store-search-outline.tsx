import { mdiStoreSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreSearchOutline} {...props} />;
}

export { mdiStoreSearchOutline as path };
