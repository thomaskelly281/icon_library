import { mdiKettleAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KettleAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiKettleAlertOutline} {...props} />;
}

export { mdiKettleAlertOutline as path };
