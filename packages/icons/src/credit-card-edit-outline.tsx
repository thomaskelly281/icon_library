import { mdiCreditCardEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardEditOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardEditOutline} {...props} />;
}

export { mdiCreditCardEditOutline as path };
