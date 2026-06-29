import { mdiFoodVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodVariantOff(props: IconComponentProps) {
  return <Icon path={mdiFoodVariantOff} {...props} />;
}

export { mdiFoodVariantOff as path };
