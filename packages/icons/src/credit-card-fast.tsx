import { mdiCreditCardFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardFast(props: IconComponentProps) {
  return <Icon path={mdiCreditCardFast} {...props} />;
}

export { mdiCreditCardFast as path };
