import { mdiCloudSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudSearchOutline} {...props} />;
}

export { mdiCloudSearchOutline as path };
