import { mdiSchoolOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SchoolOutline(props: IconComponentProps) {
  return <Icon path={mdiSchoolOutline} {...props} />;
}

export { mdiSchoolOutline as path };
