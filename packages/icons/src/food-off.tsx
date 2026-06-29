import { mdiFoodOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodOff(props: IconComponentProps) {
  return <Icon path={mdiFoodOff} {...props} />;
}

export { mdiFoodOff as path };
