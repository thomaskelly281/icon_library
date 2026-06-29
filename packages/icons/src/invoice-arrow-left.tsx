import { mdiInvoiceArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiInvoiceArrowLeft} {...props} />;
}

export { mdiInvoiceArrowLeft as path };
