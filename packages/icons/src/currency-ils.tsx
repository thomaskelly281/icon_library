import { mdiCurrencyIls } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyIls(props: IconComponentProps) {
  return <Icon path={mdiCurrencyIls} {...props} />;
}

export { mdiCurrencyIls as path };
