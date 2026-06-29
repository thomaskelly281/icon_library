import { mdiAccountBadgeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountBadgeOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountBadgeOutline} {...props} />;
}

export { mdiAccountBadgeOutline as path };
