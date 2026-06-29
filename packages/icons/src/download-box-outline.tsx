import { mdiDownloadBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiDownloadBoxOutline} {...props} />;
}

export { mdiDownloadBoxOutline as path };
