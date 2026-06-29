import { mdiAlertPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiAlertPlusOutline} {...props} />;
}

export { mdiAlertPlusOutline as path };
