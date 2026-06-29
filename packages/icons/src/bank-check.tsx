import { mdiBankCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankCheck(props: IconComponentProps) {
  return <Icon path={mdiBankCheck} {...props} />;
}

export { mdiBankCheck as path };
