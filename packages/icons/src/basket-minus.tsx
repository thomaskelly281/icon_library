import { mdiBasketMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketMinus(props: IconComponentProps) {
  return <Icon path={mdiBasketMinus} {...props} />;
}

export { mdiBasketMinus as path };
