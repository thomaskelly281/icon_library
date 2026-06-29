import { mdiPhoneMissedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneMissedOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneMissedOutline} {...props} />;
}

export { mdiPhoneMissedOutline as path };
