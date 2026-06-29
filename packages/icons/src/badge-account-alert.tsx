import { mdiBadgeAccountAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BadgeAccountAlert(props: IconComponentProps) {
  return <Icon path={mdiBadgeAccountAlert} {...props} />;
}

export { mdiBadgeAccountAlert as path };
