import { mdiSyncOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SyncOff(props: IconComponentProps) {
  return <Icon path={mdiSyncOff} {...props} />;
}

export { mdiSyncOff as path };
