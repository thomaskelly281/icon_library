import { mdiBasketOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketOutline(props: IconComponentProps) {
  return <Icon path={mdiBasketOutline} {...props} />;
}

export { mdiBasketOutline as path };
