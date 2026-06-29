import { mdiFoodHotDog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodHotDog(props: IconComponentProps) {
  return <Icon path={mdiFoodHotDog} {...props} />;
}

export { mdiFoodHotDog as path };
