import { mdiVacuumOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VacuumOutline(props: IconComponentProps) {
  return <Icon path={mdiVacuumOutline} {...props} />;
}

export { mdiVacuumOutline as path };
