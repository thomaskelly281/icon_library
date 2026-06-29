import { mdiImageMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiImageMarkerOutline} {...props} />;
}

export { mdiImageMarkerOutline as path };
