import { mdiBicycleBasket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BicycleBasket(props: IconComponentProps) {
  return <Icon path={mdiBicycleBasket} {...props} />;
}

export { mdiBicycleBasket as path };
