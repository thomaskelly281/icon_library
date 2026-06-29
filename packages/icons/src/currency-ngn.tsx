import { mdiCurrencyNgn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyNgn(props: IconComponentProps) {
  return <Icon path={mdiCurrencyNgn} {...props} />;
}

export { mdiCurrencyNgn as path };
