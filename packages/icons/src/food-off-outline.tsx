import { mdiFoodOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodOffOutline(props: IconComponentProps) {
  return <Icon path={mdiFoodOffOutline} {...props} />;
}

export { mdiFoodOffOutline as path };
