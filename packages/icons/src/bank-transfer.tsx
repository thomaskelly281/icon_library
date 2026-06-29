import { mdiBankTransfer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankTransfer(props: IconComponentProps) {
  return <Icon path={mdiBankTransfer} {...props} />;
}

export { mdiBankTransfer as path };
