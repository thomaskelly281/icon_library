import { mdiCreditCardChip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardChip(props: IconComponentProps) {
  return <Icon path={mdiCreditCardChip} {...props} />;
}

export { mdiCreditCardChip as path };
