import { mdiBasketPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketPlus(props: IconComponentProps) {
  return <Icon path={mdiBasketPlus} {...props} />;
}

export { mdiBasketPlus as path };
