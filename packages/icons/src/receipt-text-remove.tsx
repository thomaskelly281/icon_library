import { mdiReceiptTextRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextRemove(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextRemove} {...props} />;
}

export { mdiReceiptTextRemove as path };
