import { mdiInvoiceFastOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceFastOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceFastOutline} {...props} />;
}

export { mdiInvoiceFastOutline as path };
