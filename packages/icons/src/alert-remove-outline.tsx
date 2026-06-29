import { mdiAlertRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiAlertRemoveOutline} {...props} />;
}

export { mdiAlertRemoveOutline as path };
