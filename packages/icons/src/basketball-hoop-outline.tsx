import { mdiBasketballHoopOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BasketballHoopOutline(props: IconComponentProps) {
  return <Icon path={mdiBasketballHoopOutline} {...props} />;
}

export { mdiBasketballHoopOutline as path };
