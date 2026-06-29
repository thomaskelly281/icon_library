import { mdiPoliceBadge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PoliceBadge(props: IconComponentProps) {
  return <Icon path={mdiPoliceBadge} {...props} />;
}

export { mdiPoliceBadge as path };
