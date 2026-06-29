import { mdiBankCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankCircle(props: IconComponentProps) {
  return <Icon path={mdiBankCircle} {...props} />;
}

export { mdiBankCircle as path };
