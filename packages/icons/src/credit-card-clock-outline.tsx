import { mdiCreditCardClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardClockOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardClockOutline} {...props} />;
}

export { mdiCreditCardClockOutline as path };
