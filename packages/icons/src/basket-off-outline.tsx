import { mdiBasketOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketOffOutline(props: IconComponentProps) {
  return <Icon path={mdiBasketOffOutline} {...props} />;
}

export { mdiBasketOffOutline as path };
