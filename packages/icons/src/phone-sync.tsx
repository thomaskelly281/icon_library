import { mdiPhoneSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneSync(props: IconComponentProps) {
  return <Icon path={mdiPhoneSync} {...props} />;
}

export { mdiPhoneSync as path };
