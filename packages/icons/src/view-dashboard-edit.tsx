import { mdiViewDashboardEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewDashboardEdit(props: IconComponentProps) {
  return <Icon path={mdiViewDashboardEdit} {...props} />;
}

export { mdiViewDashboardEdit as path };
