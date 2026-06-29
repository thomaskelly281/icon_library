import { mdiPhoneDialOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneDialOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneDialOutline} {...props} />;
}

export { mdiPhoneDialOutline as path };
