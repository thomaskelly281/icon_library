import { mdiShoppingMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoppingMusic(props: IconComponentProps) {
  return <Icon path={mdiShoppingMusic} {...props} />;
}

export { mdiShoppingMusic as path };
