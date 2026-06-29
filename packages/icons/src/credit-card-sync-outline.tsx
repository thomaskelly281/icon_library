import { mdiCreditCardSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardSyncOutline} {...props} />;
}

export { mdiCreditCardSyncOutline as path };
