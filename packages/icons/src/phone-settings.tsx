import { mdiPhoneSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneSettings(props: IconComponentProps) {
  return <Icon path={mdiPhoneSettings} {...props} />;
}

export { mdiPhoneSettings as path };
