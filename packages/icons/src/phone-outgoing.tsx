import { mdiPhoneOutgoing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneOutgoing(props: IconComponentProps) {
  return <Icon path={mdiPhoneOutgoing} {...props} />;
}

export { mdiPhoneOutgoing as path };
