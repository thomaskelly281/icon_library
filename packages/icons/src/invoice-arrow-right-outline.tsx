import { mdiInvoiceArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceArrowRightOutline} {...props} />;
}

export { mdiInvoiceArrowRightOutline as path };
