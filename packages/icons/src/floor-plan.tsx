import { mdiFloorPlan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FloorPlan(props: IconComponentProps) {
  return <Icon path={mdiFloorPlan} {...props} />;
}

export { mdiFloorPlan as path };
