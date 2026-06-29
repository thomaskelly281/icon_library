import { mdiPhoneVoip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneVoip(props: IconComponentProps) {
  return <Icon path={mdiPhoneVoip} {...props} />;
}

export { mdiPhoneVoip as path };
