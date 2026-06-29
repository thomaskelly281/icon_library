import { mdiFoodDrumstickOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodDrumstickOutline(props: IconComponentProps) {
  return <Icon path={mdiFoodDrumstickOutline} {...props} />;
}

export { mdiFoodDrumstickOutline as path };
