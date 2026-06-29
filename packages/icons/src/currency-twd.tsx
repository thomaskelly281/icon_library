import { mdiCurrencyTwd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyTwd(props: IconComponentProps) {
  return <Icon path={mdiCurrencyTwd} {...props} />;
}

export { mdiCurrencyTwd as path };
