import { mdiBadgeAccountAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BadgeAccountAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiBadgeAccountAlertOutline} {...props} />;
}

export { mdiBadgeAccountAlertOutline as path };
