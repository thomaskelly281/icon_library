import { mdiCurrencyKrw } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyKrw(props: IconComponentProps) {
  return <Icon path={mdiCurrencyKrw} {...props} />;
}

export { mdiCurrencyKrw as path };
