import { mdiOfficeBuildingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OfficeBuildingOutline(props: IconComponentProps) {
  return <Icon path={mdiOfficeBuildingOutline} {...props} />;
}

export { mdiOfficeBuildingOutline as path };
