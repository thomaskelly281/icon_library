import { mdiLayersSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiLayersSearchOutline} {...props} />;
}

export { mdiLayersSearchOutline as path };
