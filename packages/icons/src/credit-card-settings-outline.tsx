import { mdiCreditCardSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiCreditCardSettingsOutline} {...props} />;
}

export { mdiCreditCardSettingsOutline as path };
