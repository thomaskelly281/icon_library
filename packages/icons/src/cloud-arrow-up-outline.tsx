import { mdiCloudArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudArrowUpOutline} {...props} />;
}

export { mdiCloudArrowUpOutline as path };
