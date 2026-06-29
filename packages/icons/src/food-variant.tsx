import { mdiFoodVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodVariant(props: IconComponentProps) {
  return <Icon path={mdiFoodVariant} {...props} />;
}

export { mdiFoodVariant as path };
