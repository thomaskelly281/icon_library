import { mdiKeyAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiKeyAlertOutline} {...props} />;
}

export { mdiKeyAlertOutline as path };
