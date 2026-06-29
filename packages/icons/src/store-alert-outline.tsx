import { mdiStoreAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreAlertOutline} {...props} />;
}

export { mdiStoreAlertOutline as path };
