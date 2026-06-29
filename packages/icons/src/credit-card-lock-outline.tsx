import { mdiCreditCardLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardLockOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardLockOutline} {...props} />;
}

export { mdiCreditCardLockOutline as path };
