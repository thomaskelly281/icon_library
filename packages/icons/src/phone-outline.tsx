import { mdiPhoneOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneOutline} {...props} />;
}

export { mdiPhoneOutline as path };
