import { mdiCloudPercentOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudPercentOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudPercentOutline} {...props} />;
}

export { mdiCloudPercentOutline as path };
