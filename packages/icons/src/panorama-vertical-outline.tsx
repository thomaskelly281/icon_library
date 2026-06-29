import { mdiPanoramaVerticalOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaVerticalOutline(props: IconComponentProps) {
  return <Icon path={mdiPanoramaVerticalOutline} {...props} />;
}

export { mdiPanoramaVerticalOutline as path };
