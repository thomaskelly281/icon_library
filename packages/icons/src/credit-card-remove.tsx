import { mdiCreditCardRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardRemove(props: IconComponentProps) {
  return <Icon path={mdiCreditCardRemove} {...props} />;
}

export { mdiCreditCardRemove as path };
