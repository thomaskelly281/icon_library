import { mdiPhoneLogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneLogOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneLogOutline} {...props} />;
}

export { mdiPhoneLogOutline as path };
