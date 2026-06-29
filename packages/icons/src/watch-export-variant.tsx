import { mdiWatchExportVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WatchExportVariant(props: IconComponentProps) {
  return <Icon path={mdiWatchExportVariant} {...props} />;
}

export { mdiWatchExportVariant as path };
