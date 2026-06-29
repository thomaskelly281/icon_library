import { mdiPhoneForward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneForward(props: IconComponentProps) {
  return <Icon path={mdiPhoneForward} {...props} />;
}

export { mdiPhoneForward as path };
