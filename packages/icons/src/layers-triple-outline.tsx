import { mdiLayersTripleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersTripleOutline(props: IconComponentProps) {
  return <Icon path={mdiLayersTripleOutline} {...props} />;
}

export { mdiLayersTripleOutline as path };
