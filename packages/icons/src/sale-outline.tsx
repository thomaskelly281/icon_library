import { mdiSaleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SaleOutline(props: IconComponentProps) {
  return <Icon path={mdiSaleOutline} {...props} />;
}

export { mdiSaleOutline as path };
