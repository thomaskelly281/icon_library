import { mdiBasket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Basket(props: IconComponentProps) {
  return <Icon path={mdiBasket} {...props} />;
}

export { mdiBasket as path };
