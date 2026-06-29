import { mdiPhoneMessageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneMessageOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneMessageOutline} {...props} />;
}

export { mdiPhoneMessageOutline as path };
