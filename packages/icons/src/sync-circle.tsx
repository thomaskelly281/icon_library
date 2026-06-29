import { mdiSyncCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SyncCircle(props: IconComponentProps) {
  return <Icon path={mdiSyncCircle} {...props} />;
}

export { mdiSyncCircle as path };
