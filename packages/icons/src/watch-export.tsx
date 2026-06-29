import { mdiWatchExport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WatchExport(props: IconComponentProps) {
  return <Icon path={mdiWatchExport} {...props} />;
}

export { mdiWatchExport as path };
