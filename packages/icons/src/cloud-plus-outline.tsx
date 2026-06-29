import { mdiCloudPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudPlusOutline} {...props} />;
}

export { mdiCloudPlusOutline as path };
