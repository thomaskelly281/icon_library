import { mdiCurrencyThb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyThb(props: IconComponentProps) {
  return <Icon path={mdiCurrencyThb} {...props} />;
}

export { mdiCurrencyThb as path };
