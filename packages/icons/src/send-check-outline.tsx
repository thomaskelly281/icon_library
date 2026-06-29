import { mdiSendCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiSendCheckOutline} {...props} />;
}

export { mdiSendCheckOutline as path };
