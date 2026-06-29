import { mdiDownloadMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiDownloadMultipleOutline} {...props} />;
}

export { mdiDownloadMultipleOutline as path };
