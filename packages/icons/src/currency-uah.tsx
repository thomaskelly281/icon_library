import { mdiCurrencyUah } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyUah(props: IconComponentProps) {
  return <Icon path={mdiCurrencyUah} {...props} />;
}

export { mdiCurrencyUah as path };
