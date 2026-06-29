import { mdiCreditCardMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardMinusOutline} {...props} />;
}

export { mdiCreditCardMinusOutline as path };
