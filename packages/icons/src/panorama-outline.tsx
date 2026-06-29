import { mdiPanoramaOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaOutline(props: IconComponentProps) {
  return <Icon path={mdiPanoramaOutline} {...props} />;
}

export { mdiPanoramaOutline as path };
