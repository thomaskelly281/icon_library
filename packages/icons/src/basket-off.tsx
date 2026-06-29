import { mdiBasketOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketOff(props: IconComponentProps) {
  return <Icon path={mdiBasketOff} {...props} />;
}

export { mdiBasketOff as path };
