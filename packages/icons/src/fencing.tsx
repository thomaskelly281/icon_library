import { mdiFencing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fencing(props: IconComponentProps) {
  return <Icon path={mdiFencing} {...props} />;
}

export { mdiFencing as path };
