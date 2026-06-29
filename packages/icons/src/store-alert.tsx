import { mdiStoreAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreAlert(props: IconComponentProps) {
  return <Icon path={mdiStoreAlert} {...props} />;
}

export { mdiStoreAlert as path };
