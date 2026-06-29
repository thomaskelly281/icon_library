import { mdiCreditCardCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardCheck(props: IconComponentProps) {
  return <Icon path={mdiCreditCardCheck} {...props} />;
}

export { mdiCreditCardCheck as path };
