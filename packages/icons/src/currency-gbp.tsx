import { mdiCurrencyGbp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyGbp(props: IconComponentProps) {
  return <Icon path={mdiCurrencyGbp} {...props} />;
}

export { mdiCurrencyGbp as path };
