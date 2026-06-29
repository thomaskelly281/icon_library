import { mdiWatchImport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WatchImport(props: IconComponentProps) {
  return <Icon path={mdiWatchImport} {...props} />;
}

export { mdiWatchImport as path };
