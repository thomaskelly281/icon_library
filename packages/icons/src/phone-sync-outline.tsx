import { mdiPhoneSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneSyncOutline} {...props} />;
}

export { mdiPhoneSyncOutline as path };
