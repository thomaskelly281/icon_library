import { mdiBasketFill } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketFill(props: IconComponentProps) {
  return <Icon path={mdiBasketFill} {...props} />;
}

export { mdiBasketFill as path };
