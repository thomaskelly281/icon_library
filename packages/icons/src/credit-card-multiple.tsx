import { mdiCreditCardMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardMultiple(props: IconComponentProps) {
  return <Icon path={mdiCreditCardMultiple} {...props} />;
}

export { mdiCreditCardMultiple as path };
