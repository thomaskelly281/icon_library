import { mdiDownloadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadOutline(props: IconComponentProps) {
  return <Icon path={mdiDownloadOutline} {...props} />;
}

export { mdiDownloadOutline as path };
