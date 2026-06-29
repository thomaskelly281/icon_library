import { mdiAlertCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiAlertCircleOutline} {...props} />;
}

export { mdiAlertCircleOutline as path };
