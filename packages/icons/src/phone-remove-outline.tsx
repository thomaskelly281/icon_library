import { mdiPhoneRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneRemoveOutline} {...props} />;
}

export { mdiPhoneRemoveOutline as path };
