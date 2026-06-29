import { mdiCloudOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudOffOutline} {...props} />;
}

export { mdiCloudOffOutline as path };
