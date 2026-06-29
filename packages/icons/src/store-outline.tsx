import { mdiStoreOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreOutline} {...props} />;
}

export { mdiStoreOutline as path };
