import { mdiBankOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankOff(props: IconComponentProps) {
  return <Icon path={mdiBankOff} {...props} />;
}

export { mdiBankOff as path };
