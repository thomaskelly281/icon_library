import { mdiFileCloudOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCloudOutline(props: IconComponentProps) {
  return <Icon path={mdiFileCloudOutline} {...props} />;
}

export { mdiFileCloudOutline as path };
