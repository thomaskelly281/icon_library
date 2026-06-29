import { mdiPhoneOutgoingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneOutgoingOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneOutgoingOutline} {...props} />;
}

export { mdiPhoneOutgoingOutline as path };
