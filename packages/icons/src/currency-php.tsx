import { mdiCurrencyPhp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyPhp(props: IconComponentProps) {
  return <Icon path={mdiCurrencyPhp} {...props} />;
}

export { mdiCurrencyPhp as path };
