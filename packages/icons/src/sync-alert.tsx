import { mdiSyncAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SyncAlert(props: IconComponentProps) {
  return <Icon path={mdiSyncAlert} {...props} />;
}

export { mdiSyncAlert as path };
