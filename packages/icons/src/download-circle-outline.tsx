import { mdiDownloadCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DownloadCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiDownloadCircleOutline} {...props} />;
}

export { mdiDownloadCircleOutline as path };
