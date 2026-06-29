import { mdiCurrencyMnt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CurrencyMnt(props: IconComponentProps) {
  return <Icon path={mdiCurrencyMnt} {...props} />;
}

export { mdiCurrencyMnt as path };
