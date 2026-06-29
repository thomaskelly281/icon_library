import { mdiCurrencyRupee } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyRupee(props: IconComponentProps) {
  return <Icon path={mdiCurrencyRupee} {...props} />;
}

export { mdiCurrencyRupee as path };
