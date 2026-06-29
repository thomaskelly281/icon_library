import { mdiOfficeBuilding } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OfficeBuilding(props: IconComponentProps) {
  return <Icon path={mdiOfficeBuilding} {...props} />;
}

export { mdiOfficeBuilding as path };
