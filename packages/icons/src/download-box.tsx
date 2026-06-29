import { mdiDownloadBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadBox(props: IconComponentProps) {
  return <Icon path={mdiDownloadBox} {...props} />;
}

export { mdiDownloadBox as path };
