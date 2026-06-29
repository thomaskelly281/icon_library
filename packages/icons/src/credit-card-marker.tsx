import { mdiCreditCardMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreditCardMarker(props: IconComponentProps) {
  return <Icon path={mdiCreditCardMarker} {...props} />;
}

export { mdiCreditCardMarker as path };
