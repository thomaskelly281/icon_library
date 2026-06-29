import { mdiReceiptTextPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextPlusOutline} {...props} />;
}

export { mdiReceiptTextPlusOutline as path };
