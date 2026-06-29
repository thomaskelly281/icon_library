import { mdiCloudMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudMinusOutline} {...props} />;
}

export { mdiCloudMinusOutline as path };
