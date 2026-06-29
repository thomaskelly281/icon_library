import { mdiCurrencyJpy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyJpy(props: IconComponentProps) {
  return <Icon path={mdiCurrencyJpy} {...props} />;
}

export { mdiCurrencyJpy as path };
