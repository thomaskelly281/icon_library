import { mdiBellBadgeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellBadgeOutline(props: IconComponentProps) {
  return <Icon path={mdiBellBadgeOutline} {...props} />;
}

export { mdiBellBadgeOutline as path };
