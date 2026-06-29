import { mdiCloudCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudCheckOutline} {...props} />;
}

export { mdiCloudCheckOutline as path };
