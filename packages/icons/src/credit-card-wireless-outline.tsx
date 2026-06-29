import { mdiCreditCardWirelessOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardWirelessOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardWirelessOutline} {...props} />;
}

export { mdiCreditCardWirelessOutline as path };
