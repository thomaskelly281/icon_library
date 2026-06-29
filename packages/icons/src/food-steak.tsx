import { mdiFoodSteak } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodSteak(props: IconComponentProps) {
  return <Icon path={mdiFoodSteak} {...props} />;
}

export { mdiFoodSteak as path };
