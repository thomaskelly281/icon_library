import { mdiReceiptTextClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextClock(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextClock} {...props} />;
}

export { mdiReceiptTextClock as path };
