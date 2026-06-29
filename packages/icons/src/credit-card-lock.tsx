import { mdiCreditCardLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardLock(props: IconComponentProps) {
  return <Icon path={mdiCreditCardLock} {...props} />;
}

export { mdiCreditCardLock as path };
