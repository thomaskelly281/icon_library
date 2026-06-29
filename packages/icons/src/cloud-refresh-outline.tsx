import { mdiCloudRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudRefreshOutline} {...props} />;
}

export { mdiCloudRefreshOutline as path };
