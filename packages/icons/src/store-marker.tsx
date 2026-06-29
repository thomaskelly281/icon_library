import { mdiStoreMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreMarker(props: IconComponentProps) {
  return <Icon path={mdiStoreMarker} {...props} />;
}

export { mdiStoreMarker as path };
