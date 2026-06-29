import { mdiLayersOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersOutline(props: IconComponentProps) {
  return <Icon path={mdiLayersOutline} {...props} />;
}

export { mdiLayersOutline as path };
