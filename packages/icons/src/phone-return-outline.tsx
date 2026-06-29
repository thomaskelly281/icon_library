import { mdiPhoneReturnOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneReturnOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneReturnOutline} {...props} />;
}

export { mdiPhoneReturnOutline as path };
