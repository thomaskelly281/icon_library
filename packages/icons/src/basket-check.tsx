import { mdiBasketCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketCheck(props: IconComponentProps) {
  return <Icon path={mdiBasketCheck} {...props} />;
}

export { mdiBasketCheck as path };
