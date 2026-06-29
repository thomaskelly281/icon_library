import { mdiPhoneCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneCheck(props: IconComponentProps) {
  return <Icon path={mdiPhoneCheck} {...props} />;
}

export { mdiPhoneCheck as path };
