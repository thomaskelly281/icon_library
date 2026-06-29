import { mdiPhoneOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneOffOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneOffOutline} {...props} />;
}

export { mdiPhoneOffOutline as path };
