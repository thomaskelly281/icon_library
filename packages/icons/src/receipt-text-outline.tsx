import { mdiReceiptTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextOutline} {...props} />;
}

export { mdiReceiptTextOutline as path };
