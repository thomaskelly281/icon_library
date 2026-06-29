import { mdiCreditCardPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardPlusOutline} {...props} />;
}

export { mdiCreditCardPlusOutline as path };
