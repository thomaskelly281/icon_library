import { mdiShoppingSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoppingSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiShoppingSearchOutline} {...props} />;
}

export { mdiShoppingSearchOutline as path };
