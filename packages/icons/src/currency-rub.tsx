import { mdiCurrencyRub } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyRub(props: IconComponentProps) {
  return <Icon path={mdiCurrencyRub} {...props} />;
}

export { mdiCurrencyRub as path };
