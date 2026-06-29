import { mdiInvoiceText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceText(props: IconComponentProps) {
  return <Icon path={mdiInvoiceText} {...props} />;
}

export { mdiInvoiceText as path };
