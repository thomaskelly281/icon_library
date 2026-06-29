import { mdiPhoneRingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneRingOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneRingOutline} {...props} />;
}

export { mdiPhoneRingOutline as path };
