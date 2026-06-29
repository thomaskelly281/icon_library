import { mdiBadgeAccountHorizontalOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BadgeAccountHorizontalOutline(props: IconComponentProps) {
  return <Icon path={mdiBadgeAccountHorizontalOutline} {...props} />;
}

export { mdiBadgeAccountHorizontalOutline as path };
