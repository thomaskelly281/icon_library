import { mdiCreditCardPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardPlus(props: IconComponentProps) {
  return <Icon path={mdiCreditCardPlus} {...props} />;
}

export { mdiCreditCardPlus as path };
