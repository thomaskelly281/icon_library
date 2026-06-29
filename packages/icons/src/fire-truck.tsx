import { mdiFireTruck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireTruck(props: IconComponentProps) {
  return <Icon path={mdiFireTruck} {...props} />;
}

export { mdiFireTruck as path };
