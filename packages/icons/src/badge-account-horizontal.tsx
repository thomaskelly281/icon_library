import { mdiBadgeAccountHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BadgeAccountHorizontal(props: IconComponentProps) {
  return <Icon path={mdiBadgeAccountHorizontal} {...props} />;
}

export { mdiBadgeAccountHorizontal as path };
