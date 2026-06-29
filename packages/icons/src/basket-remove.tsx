import { mdiBasketRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketRemove(props: IconComponentProps) {
  return <Icon path={mdiBasketRemove} {...props} />;
}

export { mdiBasketRemove as path };
