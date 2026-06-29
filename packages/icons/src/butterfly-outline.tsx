import { mdiButterflyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ButterflyOutline(props: IconComponentProps) {
  return <Icon path={mdiButterflyOutline} {...props} />;
}

export { mdiButterflyOutline as path };
