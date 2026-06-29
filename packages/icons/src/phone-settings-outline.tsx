import { mdiPhoneSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneSettingsOutline} {...props} />;
}

export { mdiPhoneSettingsOutline as path };
