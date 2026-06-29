import { mdiReceiptTextCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextCheckOutline} {...props} />;
}

export { mdiReceiptTextCheckOutline as path };
