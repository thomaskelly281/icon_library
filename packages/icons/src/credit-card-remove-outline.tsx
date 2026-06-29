import { mdiCreditCardRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardRemoveOutline} {...props} />;
}

export { mdiCreditCardRemoveOutline as path };
