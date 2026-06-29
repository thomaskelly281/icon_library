import { mdiPanoramaHorizontalOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaHorizontalOutline(props: IconComponentProps) {
  return <Icon path={mdiPanoramaHorizontalOutline} {...props} />;
}

export { mdiPanoramaHorizontalOutline as path };
