import { mdiPhoneIncomingOutgoing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneIncomingOutgoing(props: IconComponentProps) {
  return <Icon path={mdiPhoneIncomingOutgoing} {...props} />;
}

export { mdiPhoneIncomingOutgoing as path };
