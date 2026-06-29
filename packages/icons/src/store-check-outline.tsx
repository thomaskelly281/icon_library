import { mdiStoreCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreCheckOutline} {...props} />;
}

export { mdiStoreCheckOutline as path };
