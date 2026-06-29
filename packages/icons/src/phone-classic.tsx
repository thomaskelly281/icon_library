import { mdiPhoneClassic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneClassic(props: IconComponentProps) {
  return <Icon path={mdiPhoneClassic} {...props} />;
}

export { mdiPhoneClassic as path };
