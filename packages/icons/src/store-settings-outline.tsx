import { mdiStoreSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreSettingsOutline} {...props} />;
}

export { mdiStoreSettingsOutline as path };
