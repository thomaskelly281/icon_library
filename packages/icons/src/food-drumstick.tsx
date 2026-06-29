import { mdiFoodDrumstick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodDrumstick(props: IconComponentProps) {
  return <Icon path={mdiFoodDrumstick} {...props} />;
}

export { mdiFoodDrumstick as path };
