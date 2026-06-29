import { mdiPhoneOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneOff(props: IconComponentProps) {
  return <Icon path={mdiPhoneOff} {...props} />;
}

export { mdiPhoneOff as path };
