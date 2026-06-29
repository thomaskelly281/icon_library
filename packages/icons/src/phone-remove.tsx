import { mdiPhoneRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneRemove(props: IconComponentProps) {
  return <Icon path={mdiPhoneRemove} {...props} />;
}

export { mdiPhoneRemove as path };
