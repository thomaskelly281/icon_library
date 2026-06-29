import { mdiCloudSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudSyncOutline} {...props} />;
}

export { mdiCloudSyncOutline as path };
