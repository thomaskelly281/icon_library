import { mdiFoodOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodOutline(props: IconComponentProps) {
  return <Icon path={mdiFoodOutline} {...props} />;
}

export { mdiFoodOutline as path };
