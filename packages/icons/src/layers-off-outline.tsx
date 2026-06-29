import { mdiLayersOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersOffOutline(props: IconComponentProps) {
  return <Icon path={mdiLayersOffOutline} {...props} />;
}

export { mdiLayersOffOutline as path };
