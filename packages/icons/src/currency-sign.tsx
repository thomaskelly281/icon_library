import { mdiCurrencySign } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencySign(props: IconComponentProps) {
  return <Icon path={mdiCurrencySign} {...props} />;
}

export { mdiCurrencySign as path };
