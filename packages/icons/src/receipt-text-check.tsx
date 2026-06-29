import { mdiReceiptTextCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextCheck(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextCheck} {...props} />;
}

export { mdiReceiptTextCheck as path };
