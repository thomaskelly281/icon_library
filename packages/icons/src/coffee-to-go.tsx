import { mdiCoffeeToGo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoffeeToGo(props: IconComponentProps) {
  return <Icon path={mdiCoffeeToGo} {...props} />;
}

export { mdiCoffeeToGo as path };
