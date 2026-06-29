import { mdiBasketUnfill } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketUnfill(props: IconComponentProps) {
  return <Icon path={mdiBasketUnfill} {...props} />;
}

export { mdiBasketUnfill as path };
