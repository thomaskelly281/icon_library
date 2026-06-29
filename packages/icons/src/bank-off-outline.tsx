import { mdiBankOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankOffOutline(props: IconComponentProps) {
  return <Icon path={mdiBankOffOutline} {...props} />;
}

export { mdiBankOffOutline as path };
