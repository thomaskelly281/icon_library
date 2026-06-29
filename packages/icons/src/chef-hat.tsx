import { mdiChefHat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChefHat(props: IconComponentProps) {
  return <Icon path={mdiChefHat} {...props} />;
}

export { mdiChefHat as path };
