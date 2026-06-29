import { mdiCreditCardSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardSync(props: IconComponentProps) {
  return <Icon path={mdiCreditCardSync} {...props} />;
}

export { mdiCreditCardSync as path };
