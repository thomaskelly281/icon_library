import { mdiFilePhoneOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilePhoneOutline(props: IconComponentProps) {
  return <Icon path={mdiFilePhoneOutline} {...props} />;
}

export { mdiFilePhoneOutline as path };
