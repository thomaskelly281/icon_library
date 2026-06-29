import { mdiDownloadOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadOffOutline(props: IconComponentProps) {
  return <Icon path={mdiDownloadOffOutline} {...props} />;
}

export { mdiDownloadOffOutline as path };
