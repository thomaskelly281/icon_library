import { mdiPhoneMessage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneMessage(props: IconComponentProps) {
  return <Icon path={mdiPhoneMessage} {...props} />;
}

export { mdiPhoneMessage as path };
