import { mdiPhoneForwardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneForwardOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneForwardOutline} {...props} />;
}

export { mdiPhoneForwardOutline as path };
