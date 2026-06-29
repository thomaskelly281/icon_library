import { mdiPhoneReturn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneReturn(props: IconComponentProps) {
  return <Icon path={mdiPhoneReturn} {...props} />;
}

export { mdiPhoneReturn as path };
