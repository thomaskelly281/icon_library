import { mdiInvoiceSendOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceSendOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceSendOutline} {...props} />;
}

export { mdiInvoiceSendOutline as path };
