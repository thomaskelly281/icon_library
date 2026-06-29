import { mdiFoodKosher } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodKosher(props: IconComponentProps) {
  return <Icon path={mdiFoodKosher} {...props} />;
}

export { mdiFoodKosher as path };
