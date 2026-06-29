import { mdiCloudCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudCancelOutline} {...props} />;
}

export { mdiCloudCancelOutline as path };
