import { mdiFoodHalal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FoodHalal(props: IconComponentProps) {
  return <Icon path={mdiFoodHalal} {...props} />;
}

export { mdiFoodHalal as path };
