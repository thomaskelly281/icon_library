import { mdiPhoneRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneRefresh(props: IconComponentProps) {
  return <Icon path={mdiPhoneRefresh} {...props} />;
}

export { mdiPhoneRefresh as path };
