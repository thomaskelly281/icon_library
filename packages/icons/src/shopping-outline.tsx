import { mdiShoppingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoppingOutline(props: IconComponentProps) {
  return <Icon path={mdiShoppingOutline} {...props} />;
}

export { mdiShoppingOutline as path };
