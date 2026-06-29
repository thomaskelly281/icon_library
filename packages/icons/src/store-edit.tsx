import { mdiStoreEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreEdit(props: IconComponentProps) {
  return <Icon path={mdiStoreEdit} {...props} />;
}

export { mdiStoreEdit as path };
