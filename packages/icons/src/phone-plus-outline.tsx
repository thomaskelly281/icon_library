import { mdiPhonePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PhonePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiPhonePlusOutline} {...props} />;
}

export { mdiPhonePlusOutline as path };
