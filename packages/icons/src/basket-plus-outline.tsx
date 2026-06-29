import { mdiBasketPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiBasketPlusOutline} {...props} />;
}

export { mdiBasketPlusOutline as path };
