import { mdiCurrencyBrl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyBrl(props: IconComponentProps) {
  return <Icon path={mdiCurrencyBrl} {...props} />;
}

export { mdiCurrencyBrl as path };
