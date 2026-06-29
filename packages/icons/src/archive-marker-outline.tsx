import { mdiArchiveMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiArchiveMarkerOutline} {...props} />;
}

export { mdiArchiveMarkerOutline as path };
