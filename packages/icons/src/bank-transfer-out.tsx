import { mdiBankTransferOut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankTransferOut(props: IconComponentProps) {
  return <Icon path={mdiBankTransferOut} {...props} />;
}

export { mdiBankTransferOut as path };
