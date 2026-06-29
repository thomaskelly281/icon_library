import { mdiCurrencyUsdOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyUsdOff(props: IconComponentProps) {
  return <Icon path={mdiCurrencyUsdOff} {...props} />;
}

export { mdiCurrencyUsdOff as path };
