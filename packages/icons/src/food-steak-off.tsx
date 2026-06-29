import { mdiFoodSteakOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodSteakOff(props: IconComponentProps) {
  return <Icon path={mdiFoodSteakOff} {...props} />;
}

export { mdiFoodSteakOff as path };
