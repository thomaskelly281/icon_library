import { mdiStoreMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreMinusOutline} {...props} />;
}

export { mdiStoreMinusOutline as path };
