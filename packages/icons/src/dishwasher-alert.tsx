import { mdiDishwasherAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DishwasherAlert(props: IconComponentProps) {
  return <Icon path={mdiDishwasherAlert} {...props} />;
}

export { mdiDishwasherAlert as path };
