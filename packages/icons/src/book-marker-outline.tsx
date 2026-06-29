import { mdiBookMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiBookMarkerOutline} {...props} />;
}

export { mdiBookMarkerOutline as path };
