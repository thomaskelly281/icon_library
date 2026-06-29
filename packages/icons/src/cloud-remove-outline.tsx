import { mdiCloudRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudRemoveOutline} {...props} />;
}

export { mdiCloudRemoveOutline as path };
