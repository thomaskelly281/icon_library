import { mdiViewDashboardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewDashboardOutline(props: IconComponentProps) {
  return <Icon path={mdiViewDashboardOutline} {...props} />;
}

export { mdiViewDashboardOutline as path };
