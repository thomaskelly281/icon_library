import { mdiPhoneIncomingOutgoingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneIncomingOutgoingOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneIncomingOutgoingOutline} {...props} />;
}

export { mdiPhoneIncomingOutgoingOutline as path };
