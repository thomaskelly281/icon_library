import { mdiStoreRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreRemove(props: IconComponentProps) {
  return <Icon path={mdiStoreRemove} {...props} />;
}

export { mdiStoreRemove as path };
