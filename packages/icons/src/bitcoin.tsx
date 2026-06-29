import { mdiBitcoin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bitcoin(props: IconComponentProps) {
  return <Icon path={mdiBitcoin} {...props} />;
}

export { mdiBitcoin as path };
