import { mdiBasketMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiBasketMinusOutline} {...props} />;
}

export { mdiBasketMinusOutline as path };
