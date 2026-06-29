import { mdiCreditCardSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardSearchOutline} {...props} />;
}

export { mdiCreditCardSearchOutline as path };
