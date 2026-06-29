import { mdiBagSuitcaseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagSuitcaseOutline(props: IconComponentProps) {
  return <Icon path={mdiBagSuitcaseOutline} {...props} />;
}

export { mdiBagSuitcaseOutline as path };
