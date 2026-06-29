import { mdiAccountCreditCardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCreditCardOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountCreditCardOutline} {...props} />;
}

export { mdiAccountCreditCardOutline as path };
