import { mdiCloudKeyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudKeyOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudKeyOutline} {...props} />;
}

export { mdiCloudKeyOutline as path };
