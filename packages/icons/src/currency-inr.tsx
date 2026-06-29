import { mdiCurrencyInr } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyInr(props: IconComponentProps) {
  return <Icon path={mdiCurrencyInr} {...props} />;
}

export { mdiCurrencyInr as path };
