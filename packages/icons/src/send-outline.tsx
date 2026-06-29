import { mdiSendOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendOutline(props: IconComponentProps) {
  return <Icon path={mdiSendOutline} {...props} />;
}

export { mdiSendOutline as path };
