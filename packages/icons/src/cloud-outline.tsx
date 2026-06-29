import { mdiCloudOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudOutline} {...props} />;
}

export { mdiCloudOutline as path };
