import { mdiContactlessPayment } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContactlessPayment(props: IconComponentProps) {
  return <Icon path={mdiContactlessPayment} {...props} />;
}

export { mdiContactlessPayment as path };
