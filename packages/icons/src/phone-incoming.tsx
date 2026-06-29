import { mdiPhoneIncoming } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneIncoming(props: IconComponentProps) {
  return <Icon path={mdiPhoneIncoming} {...props} />;
}

export { mdiPhoneIncoming as path };
