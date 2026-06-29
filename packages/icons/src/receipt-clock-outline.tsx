import { mdiReceiptClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptClockOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptClockOutline} {...props} />;
}

export { mdiReceiptClockOutline as path };
