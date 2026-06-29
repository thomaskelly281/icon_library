import { mdiCreditCardRefund } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardRefund(props: IconComponentProps) {
  return <Icon path={mdiCreditCardRefund} {...props} />;
}

export { mdiCreditCardRefund as path };
