import { mdiBankPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankPlus(props: IconComponentProps) {
  return <Icon path={mdiBankPlus} {...props} />;
}

export { mdiBankPlus as path };
