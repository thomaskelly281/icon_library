import { mdiFoodForkDrink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodForkDrink(props: IconComponentProps) {
  return <Icon path={mdiFoodForkDrink} {...props} />;
}

export { mdiFoodForkDrink as path };
