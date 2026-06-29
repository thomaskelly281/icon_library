import { mdiAccountBadge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountBadge(props: IconComponentProps) {
  return <Icon path={mdiAccountBadge} {...props} />;
}

export { mdiAccountBadge as path };
