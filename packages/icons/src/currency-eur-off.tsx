import { mdiCurrencyEurOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyEurOff(props: IconComponentProps) {
  return <Icon path={mdiCurrencyEurOff} {...props} />;
}

export { mdiCurrencyEurOff as path };
