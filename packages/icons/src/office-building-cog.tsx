import { mdiOfficeBuildingCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OfficeBuildingCog(props: IconComponentProps) {
  return <Icon path={mdiOfficeBuildingCog} {...props} />;
}

export { mdiOfficeBuildingCog as path };
