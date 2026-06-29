import { mdiCurrencyFra } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyFra(props: IconComponentProps) {
  return <Icon path={mdiCurrencyFra} {...props} />;
}

export { mdiCurrencyFra as path };
