import { mdiFoodAppleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodAppleOutline(props: IconComponentProps) {
  return <Icon path={mdiFoodAppleOutline} {...props} />;
}

export { mdiFoodAppleOutline as path };
