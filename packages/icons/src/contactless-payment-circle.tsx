import { mdiContactlessPaymentCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContactlessPaymentCircle(props: IconComponentProps) {
  return <Icon path={mdiContactlessPaymentCircle} {...props} />;
}

export { mdiContactlessPaymentCircle as path };
