import { mdiCurrencyCny } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyCny(props: IconComponentProps) {
  return <Icon path={mdiCurrencyCny} {...props} />;
}

export { mdiCurrencyCny as path };
