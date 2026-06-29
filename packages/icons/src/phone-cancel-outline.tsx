import { mdiPhoneCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhoneCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiPhoneCancelOutline} {...props} />;
}

export { mdiPhoneCancelOutline as path };
