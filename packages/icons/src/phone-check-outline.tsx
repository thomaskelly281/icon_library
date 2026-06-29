import { mdiPhoneCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneCheckOutline} {...props} />;
}

export { mdiPhoneCheckOutline as path };
