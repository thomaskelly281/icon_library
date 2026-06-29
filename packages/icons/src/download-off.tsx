import { mdiDownloadOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadOff(props: IconComponentProps) {
  return <Icon path={mdiDownloadOff} {...props} />;
}

export { mdiDownloadOff as path };
