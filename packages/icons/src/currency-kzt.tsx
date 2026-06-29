import { mdiCurrencyKzt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyKzt(props: IconComponentProps) {
  return <Icon path={mdiCurrencyKzt} {...props} />;
}

export { mdiCurrencyKzt as path };
