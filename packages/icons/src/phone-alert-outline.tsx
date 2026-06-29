import { mdiPhoneAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneAlertOutline} {...props} />;
}

export { mdiPhoneAlertOutline as path };
