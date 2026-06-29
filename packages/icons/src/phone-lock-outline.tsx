import { mdiPhoneLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneLockOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneLockOutline} {...props} />;
}

export { mdiPhoneLockOutline as path };
