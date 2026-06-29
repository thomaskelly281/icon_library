import { mdiCreditCardFastOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardFastOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardFastOutline} {...props} />;
}

export { mdiCreditCardFastOutline as path };
