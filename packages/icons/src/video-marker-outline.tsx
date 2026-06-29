import { mdiVideoMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiVideoMarkerOutline} {...props} />;
}

export { mdiVideoMarkerOutline as path };
