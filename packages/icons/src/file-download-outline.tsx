import { mdiFileDownloadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDownloadOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDownloadOutline} {...props} />;
}

export { mdiFileDownloadOutline as path };
