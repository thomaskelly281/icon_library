import { mdiReceiptSendOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptSendOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptSendOutline} {...props} />;
}

export { mdiReceiptSendOutline as path };
