import { mdiOfficeBuildingPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OfficeBuildingPlus(props: IconComponentProps) {
  return <Icon path={mdiOfficeBuildingPlus} {...props} />;
}

export { mdiOfficeBuildingPlus as path };
