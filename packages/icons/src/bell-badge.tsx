import { mdiBellBadge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellBadge(props: IconComponentProps) {
  return <Icon path={mdiBellBadge} {...props} />;
}

export { mdiBellBadge as path };
