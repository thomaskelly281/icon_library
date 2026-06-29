import { mdiPhoneAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneAlert(props: IconComponentProps) {
  return <Icon path={mdiPhoneAlert} {...props} />;
}

export { mdiPhoneAlert as path };
