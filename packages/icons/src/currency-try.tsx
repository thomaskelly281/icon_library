import { mdiCurrencyTry } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyTry(props: IconComponentProps) {
  return <Icon path={mdiCurrencyTry} {...props} />;
}

export { mdiCurrencyTry as path };
