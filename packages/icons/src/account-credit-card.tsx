import { mdiAccountCreditCard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCreditCard(props: IconComponentProps) {
  return <Icon path={mdiAccountCreditCard} {...props} />;
}

export { mdiAccountCreditCard as path };
