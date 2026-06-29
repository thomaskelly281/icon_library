import { mdiBankMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankMinus(props: IconComponentProps) {
  return <Icon path={mdiBankMinus} {...props} />;
}

export { mdiBankMinus as path };
