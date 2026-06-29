import { mdiViewDashboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewDashboard(props: IconComponentProps) {
  return <Icon path={mdiViewDashboard} {...props} />;
}

export { mdiViewDashboard as path };
