import { mdiReceiptTextSendOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextSendOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextSendOutline} {...props} />;
}

export { mdiReceiptTextSendOutline as path };
