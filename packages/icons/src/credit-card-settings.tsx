import { mdiCreditCardSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardSettings(props: IconComponentProps) {
  return <Icon path={mdiCreditCardSettings} {...props} />;
}

export { mdiCreditCardSettings as path };
