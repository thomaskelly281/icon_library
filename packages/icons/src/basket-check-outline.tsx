import { mdiBasketCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiBasketCheckOutline} {...props} />;
}

export { mdiBasketCheckOutline as path };
