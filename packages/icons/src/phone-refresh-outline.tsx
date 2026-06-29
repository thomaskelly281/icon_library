import { mdiPhoneRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneRefreshOutline} {...props} />;
}

export { mdiPhoneRefreshOutline as path };
