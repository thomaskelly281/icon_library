import { mdiInvoice } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Invoice(props: IconComponentProps) {
  return <Icon path={mdiInvoice} {...props} />;
}

export { mdiInvoice as path };
