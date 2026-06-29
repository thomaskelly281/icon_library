import { mdiCloudAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiCloudAlertOutline} {...props} />;
}

export { mdiCloudAlertOutline as path };
