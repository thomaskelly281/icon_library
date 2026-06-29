import { mdiInvoiceArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceArrowLeftOutline} {...props} />;
}

export { mdiInvoiceArrowLeftOutline as path };
