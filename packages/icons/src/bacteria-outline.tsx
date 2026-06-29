import { mdiBacteriaOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BacteriaOutline(props: IconComponentProps) {
  return <Icon path={mdiBacteriaOutline} {...props} />;
}

export { mdiBacteriaOutline as path };
