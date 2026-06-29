import { mdiCoffeeOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoffeeOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCoffeeOffOutline} {...props} />;
}

export { mdiCoffeeOffOutline as path };
