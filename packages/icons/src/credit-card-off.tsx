import { mdiCreditCardOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardOff(props: IconComponentProps) {
  return <Icon path={mdiCreditCardOff} {...props} />;
}

export { mdiCreditCardOff as path };
