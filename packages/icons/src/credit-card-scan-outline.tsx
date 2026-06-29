import { mdiCreditCardScanOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardScanOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardScanOutline} {...props} />;
}

export { mdiCreditCardScanOutline as path };
