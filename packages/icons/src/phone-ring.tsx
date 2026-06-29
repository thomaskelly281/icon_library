import { mdiPhoneRing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneRing(props: IconComponentProps) {
  return <Icon path={mdiPhoneRing} {...props} />;
}

export { mdiPhoneRing as path };
