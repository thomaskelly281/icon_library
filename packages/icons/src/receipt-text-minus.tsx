import { mdiReceiptTextMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextMinus(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextMinus} {...props} />;
}

export { mdiReceiptTextMinus as path };
