import { mdiViewDashboardVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewDashboardVariant(props: IconComponentProps) {
  return <Icon path={mdiViewDashboardVariant} {...props} />;
}

export { mdiViewDashboardVariant as path };
