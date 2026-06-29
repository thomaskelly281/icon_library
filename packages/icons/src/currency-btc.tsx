import { mdiCurrencyBtc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyBtc(props: IconComponentProps) {
  return <Icon path={mdiCurrencyBtc} {...props} />;
}

export { mdiCurrencyBtc as path };
