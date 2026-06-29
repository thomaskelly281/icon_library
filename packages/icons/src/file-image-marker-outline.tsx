import { mdiFileImageMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImageMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiFileImageMarkerOutline} {...props} />;
}

export { mdiFileImageMarkerOutline as path };
