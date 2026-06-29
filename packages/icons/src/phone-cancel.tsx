import { mdiPhoneCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneCancel(props: IconComponentProps) {
  return <Icon path={mdiPhoneCancel} {...props} />;
}

export { mdiPhoneCancel as path };
