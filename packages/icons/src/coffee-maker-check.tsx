import { mdiCoffeeMakerCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoffeeMakerCheck(props: IconComponentProps) {
  return <Icon path={mdiCoffeeMakerCheck} {...props} />;
}

export { mdiCoffeeMakerCheck as path };
