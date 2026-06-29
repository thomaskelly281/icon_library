import { mdiCart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cart(props: IconComponentProps) {
  return <Icon path={mdiCart} {...props} />;
}

export { mdiCart as path };
