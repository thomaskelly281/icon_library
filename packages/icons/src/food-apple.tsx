import { mdiFoodApple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodApple(props: IconComponentProps) {
  return <Icon path={mdiFoodApple} {...props} />;
}

export { mdiFoodApple as path };
