import { mdiPanoramaSphereOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaSphereOutline(props: IconComponentProps) {
  return <Icon path={mdiPanoramaSphereOutline} {...props} />;
}

export { mdiPanoramaSphereOutline as path };
