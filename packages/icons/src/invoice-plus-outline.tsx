import { mdiInvoicePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoicePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoicePlusOutline} {...props} />;
}

export { mdiInvoicePlusOutline as path };
