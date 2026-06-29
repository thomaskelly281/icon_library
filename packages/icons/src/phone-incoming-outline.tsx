import { mdiPhoneIncomingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneIncomingOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneIncomingOutline} {...props} />;
}

export { mdiPhoneIncomingOutline as path };
