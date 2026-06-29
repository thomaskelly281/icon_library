import { mdiOfficeBuildingMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OfficeBuildingMarker(props: IconComponentProps) {
  return <Icon path={mdiOfficeBuildingMarker} {...props} />;
}

export { mdiOfficeBuildingMarker as path };
