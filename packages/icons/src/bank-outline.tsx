import { mdiBankOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankOutline(props: IconComponentProps) {
  return <Icon path={mdiBankOutline} {...props} />;
}

export { mdiBankOutline as path };
