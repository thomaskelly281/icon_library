import { mdiCurrencyRial } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyRial(props: IconComponentProps) {
  return <Icon path={mdiCurrencyRial} {...props} />;
}

export { mdiCurrencyRial as path };
