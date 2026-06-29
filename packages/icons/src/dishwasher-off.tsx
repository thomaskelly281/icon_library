import { mdiDishwasherOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DishwasherOff(props: IconComponentProps) {
  return <Icon path={mdiDishwasherOff} {...props} />;
}

export { mdiDishwasherOff as path };
