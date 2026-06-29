import { mdiBankTransferIn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankTransferIn(props: IconComponentProps) {
  return <Icon path={mdiBankTransferIn} {...props} />;
}

export { mdiBankTransferIn as path };
