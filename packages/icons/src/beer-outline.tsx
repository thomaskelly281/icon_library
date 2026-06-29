import { mdiBeerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeerOutline(props: IconComponentProps) {
  return <Icon path={mdiBeerOutline} {...props} />;
}

export { mdiBeerOutline as path };
