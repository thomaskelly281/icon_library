import { mdiCreditCardEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardEdit(props: IconComponentProps) {
  return <Icon path={mdiCreditCardEdit} {...props} />;
}

export { mdiCreditCardEdit as path };
