import { mdiCreditCardRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardRefresh(props: IconComponentProps) {
  return <Icon path={mdiCreditCardRefresh} {...props} />;
}

export { mdiCreditCardRefresh as path };
