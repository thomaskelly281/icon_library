import { mdiBankCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BankCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiBankCircleOutline} {...props} />;
}

export { mdiBankCircleOutline as path };
