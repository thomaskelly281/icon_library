import { mdiCreditCardMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardMultipleOutline} {...props} />;
}

export { mdiCreditCardMultipleOutline as path };
