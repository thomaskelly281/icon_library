import { mdiCreditCardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardOutline} {...props} />;
}

export { mdiCreditCardOutline as path };
