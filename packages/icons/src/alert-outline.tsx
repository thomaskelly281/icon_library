import { mdiAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertOutline(props: IconComponentProps) {
  return <Icon path={mdiAlertOutline} {...props} />;
}

export { mdiAlertOutline as path };
