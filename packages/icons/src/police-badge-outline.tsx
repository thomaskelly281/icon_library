import { mdiPoliceBadgeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PoliceBadgeOutline(props: IconComponentProps) {
  return <Icon path={mdiPoliceBadgeOutline} {...props} />;
}

export { mdiPoliceBadgeOutline as path };
