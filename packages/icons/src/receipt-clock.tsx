import { mdiReceiptClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptClock(props: IconComponentProps) {
  return <Icon path={mdiReceiptClock} {...props} />;
}

export { mdiReceiptClock as path };
