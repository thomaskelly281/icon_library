import { mdiCoffeeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoffeeOutline(props: IconComponentProps) {
  return <Icon path={mdiCoffeeOutline} {...props} />;
}

export { mdiCoffeeOutline as path };
