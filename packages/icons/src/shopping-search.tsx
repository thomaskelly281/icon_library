import { mdiShoppingSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoppingSearch(props: IconComponentProps) {
  return <Icon path={mdiShoppingSearch} {...props} />;
}

export { mdiShoppingSearch as path };
