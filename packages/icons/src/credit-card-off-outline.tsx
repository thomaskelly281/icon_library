import { mdiCreditCardOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardOffOutline} {...props} />;
}

export { mdiCreditCardOffOutline as path };
