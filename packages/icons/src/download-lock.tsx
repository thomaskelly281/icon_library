import { mdiDownloadLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadLock(props: IconComponentProps) {
  return <Icon path={mdiDownloadLock} {...props} />;
}

export { mdiDownloadLock as path };
