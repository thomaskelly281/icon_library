import { mdiCreditCardSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardSearch(props: IconComponentProps) {
  return <Icon path={mdiCreditCardSearch} {...props} />;
}

export { mdiCreditCardSearch as path };
