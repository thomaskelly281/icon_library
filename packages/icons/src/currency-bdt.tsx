import { mdiCurrencyBdt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyBdt(props: IconComponentProps) {
  return <Icon path={mdiCurrencyBdt} {...props} />;
}

export { mdiCurrencyBdt as path };
