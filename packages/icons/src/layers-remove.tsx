import { mdiLayersRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersRemove(props: IconComponentProps) {
  return <Icon path={mdiLayersRemove} {...props} />;
}

export { mdiLayersRemove as path };
