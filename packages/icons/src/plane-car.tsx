import { mdiPlaneCar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaneCar(props: IconComponentProps) {
  return <Icon path={mdiPlaneCar} {...props} />;
}

export { mdiPlaneCar as path };
