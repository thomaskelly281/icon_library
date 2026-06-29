import { mdiCreditCard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCard(props: IconComponentProps) {
  return <Icon path={mdiCreditCard} {...props} />;
}

export { mdiCreditCard as path };
