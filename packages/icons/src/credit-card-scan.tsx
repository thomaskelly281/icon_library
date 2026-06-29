import { mdiCreditCardScan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardScan(props: IconComponentProps) {
  return <Icon path={mdiCreditCardScan} {...props} />;
}

export { mdiCreditCardScan as path };
