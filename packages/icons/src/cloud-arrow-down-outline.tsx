import { mdiCloudArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudArrowDownOutline} {...props} />;
}

export { mdiCloudArrowDownOutline as path };
