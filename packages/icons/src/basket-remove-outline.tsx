import { mdiBasketRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiBasketRemoveOutline} {...props} />;
}

export { mdiBasketRemoveOutline as path };
