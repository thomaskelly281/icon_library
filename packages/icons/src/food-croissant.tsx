import { mdiFoodCroissant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodCroissant(props: IconComponentProps) {
  return <Icon path={mdiFoodCroissant} {...props} />;
}

export { mdiFoodCroissant as path };
