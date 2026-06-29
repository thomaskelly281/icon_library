import { mdiCreditCardCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardCheckOutline} {...props} />;
}

export { mdiCreditCardCheckOutline as path };
