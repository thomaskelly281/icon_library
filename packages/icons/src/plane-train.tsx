import { mdiPlaneTrain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaneTrain(props: IconComponentProps) {
  return <Icon path={mdiPlaneTrain} {...props} />;
}

export { mdiPlaneTrain as path };
