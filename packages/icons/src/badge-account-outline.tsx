import { mdiBadgeAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BadgeAccountOutline(props: IconComponentProps) {
  return <Icon path={mdiBadgeAccountOutline} {...props} />;
}

export { mdiBadgeAccountOutline as path };
