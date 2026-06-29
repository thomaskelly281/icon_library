import { mdiStoreSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreSettings(props: IconComponentProps) {
  return <Icon path={mdiStoreSettings} {...props} />;
}

export { mdiStoreSettings as path };
