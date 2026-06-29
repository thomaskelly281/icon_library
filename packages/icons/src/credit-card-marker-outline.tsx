import { mdiCreditCardMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardMarkerOutline} {...props} />;
}

export { mdiCreditCardMarkerOutline as path };
