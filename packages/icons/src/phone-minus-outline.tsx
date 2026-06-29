import { mdiPhoneMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneMinusOutline} {...props} />;
}

export { mdiPhoneMinusOutline as path };
