import { mdiBankRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankRemove(props: IconComponentProps) {
  return <Icon path={mdiBankRemove} {...props} />;
}

export { mdiBankRemove as path };
