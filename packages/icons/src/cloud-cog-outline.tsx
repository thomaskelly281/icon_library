import { mdiCloudCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCogOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudCogOutline} {...props} />;
}

export { mdiCloudCogOutline as path };
