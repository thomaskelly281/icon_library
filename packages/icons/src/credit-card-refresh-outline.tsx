import { mdiCreditCardRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardRefreshOutline} {...props} />;
}

export { mdiCreditCardRefreshOutline as path };
