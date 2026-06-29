import { mdiCurrencyUsd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyUsd(props: IconComponentProps) {
  return <Icon path={mdiCurrencyUsd} {...props} />;
}

export { mdiCurrencyUsd as path };
