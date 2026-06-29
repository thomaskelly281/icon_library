import { mdiCurrencyEth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyEth(props: IconComponentProps) {
  return <Icon path={mdiCurrencyEth} {...props} />;
}

export { mdiCurrencyEth as path };
