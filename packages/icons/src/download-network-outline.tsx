import { mdiDownloadNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiDownloadNetworkOutline} {...props} />;
}

export { mdiDownloadNetworkOutline as path };
