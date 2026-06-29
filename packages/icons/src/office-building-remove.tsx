import { mdiOfficeBuildingRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OfficeBuildingRemove(props: IconComponentProps) {
  return <Icon path={mdiOfficeBuildingRemove} {...props} />;
}

export { mdiOfficeBuildingRemove as path };
