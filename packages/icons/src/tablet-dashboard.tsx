import { mdiTabletDashboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TabletDashboard(props: IconComponentProps) {
  return <Icon path={mdiTabletDashboard} {...props} />;
}

export { mdiTabletDashboard as path };
