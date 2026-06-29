import { mdiCloudCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudCircleOutline} {...props} />;
}

export { mdiCloudCircleOutline as path };
