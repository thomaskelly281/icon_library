import { mdiCreditCardChipOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardChipOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardChipOutline} {...props} />;
}

export { mdiCreditCardChipOutline as path };
