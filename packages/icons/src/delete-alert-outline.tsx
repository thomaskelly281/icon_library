import { mdiDeleteAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiDeleteAlertOutline} {...props} />;
}

export { mdiDeleteAlertOutline as path };
