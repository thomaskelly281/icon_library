import { mdiDownloadNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadNetwork(props: IconComponentProps) {
  return <Icon path={mdiDownloadNetwork} {...props} />;
}

export { mdiDownloadNetwork as path };
