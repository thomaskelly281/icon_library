import { mdiReceiptTextPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextPlus(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextPlus} {...props} />;
}

export { mdiReceiptTextPlus as path };
