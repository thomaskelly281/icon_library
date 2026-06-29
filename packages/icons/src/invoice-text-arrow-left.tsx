import { mdiInvoiceTextArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextArrowLeft} {...props} />;
}

export { mdiInvoiceTextArrowLeft as path };
