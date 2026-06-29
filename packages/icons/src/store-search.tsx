import { mdiStoreSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreSearch(props: IconComponentProps) {
  return <Icon path={mdiStoreSearch} {...props} />;
}

export { mdiStoreSearch as path };
