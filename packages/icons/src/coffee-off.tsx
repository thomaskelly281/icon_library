import { mdiCoffeeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoffeeOff(props: IconComponentProps) {
  return <Icon path={mdiCoffeeOff} {...props} />;
}

export { mdiCoffeeOff as path };
