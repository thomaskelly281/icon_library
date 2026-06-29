import { mdiReceiptTextClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextClockOutline(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextClockOutline} {...props} />;
}

export { mdiReceiptTextClockOutline as path };
