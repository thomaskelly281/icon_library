import { mdiPhoneHangup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneHangup(props: IconComponentProps) {
  return <Icon path={mdiPhoneHangup} {...props} />;
}

export { mdiPhoneHangup as path };
