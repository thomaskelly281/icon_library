import { mdiCoffeeMaker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoffeeMaker(props: IconComponentProps) {
  return <Icon path={mdiCoffeeMaker} {...props} />;
}

export { mdiCoffeeMaker as path };
