import { mdiCreditCardWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardWireless(props: IconComponentProps) {
  return <Icon path={mdiCreditCardWireless} {...props} />;
}

export { mdiCreditCardWireless as path };
