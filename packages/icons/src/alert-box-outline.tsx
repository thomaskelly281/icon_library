import { mdiAlertBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlertBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiAlertBoxOutline} {...props} />;
}

export { mdiAlertBoxOutline as path };
