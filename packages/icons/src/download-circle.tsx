import { mdiDownloadCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadCircle(props: IconComponentProps) {
  return <Icon path={mdiDownloadCircle} {...props} />;
}

export { mdiDownloadCircle as path };
