import { mdiCurrencyEur } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyEur(props: IconComponentProps) {
  return <Icon path={mdiCurrencyEur} {...props} />;
}

export { mdiCurrencyEur as path };
