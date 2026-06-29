import { mdiCreditCardMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardMinus(props: IconComponentProps) {
  return <Icon path={mdiCreditCardMinus} {...props} />;
}

export { mdiCreditCardMinus as path };
