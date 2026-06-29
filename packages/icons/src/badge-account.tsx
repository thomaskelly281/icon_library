import { mdiBadgeAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BadgeAccount(props: IconComponentProps) {
  return <Icon path={mdiBadgeAccount} {...props} />;
}

export { mdiBadgeAccount as path };
