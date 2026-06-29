import { mdiBagPersonalOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagPersonalOutline(props: IconComponentProps) {
  return <Icon path={mdiBagPersonalOutline} {...props} />;
}

export { mdiBagPersonalOutline as path };
