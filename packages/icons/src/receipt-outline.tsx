import { mdiReceiptOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptOutline} {...props} />;
}

export { mdiReceiptOutline as path };
