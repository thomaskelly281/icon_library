import { mdiPhonePausedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhonePausedOutline(props: IconComponentProps) {
  return <Icon path={mdiPhonePausedOutline} {...props} />;
}

export { mdiPhonePausedOutline as path };
