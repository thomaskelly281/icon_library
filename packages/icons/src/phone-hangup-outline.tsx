import { mdiPhoneHangupOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneHangupOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneHangupOutline} {...props} />;
}

export { mdiPhoneHangupOutline as path };
