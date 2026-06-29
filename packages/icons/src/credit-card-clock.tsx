import { mdiCreditCardClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardClock(props: IconComponentProps) {
  return <Icon path={mdiCreditCardClock} {...props} />;
}

export { mdiCreditCardClock as path };
