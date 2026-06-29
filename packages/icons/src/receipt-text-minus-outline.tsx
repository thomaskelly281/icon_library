import { mdiReceiptTextMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextMinusOutline} {...props} />;
}

export { mdiReceiptTextMinusOutline as path };
