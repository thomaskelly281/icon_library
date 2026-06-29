import { mdiPhoneLog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneLog(props: IconComponentProps) {
  return <Icon path={mdiPhoneLog} {...props} />;
}

export { mdiPhoneLog as path };
