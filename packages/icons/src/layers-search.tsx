import { mdiLayersSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersSearch(props: IconComponentProps) {
  return <Icon path={mdiLayersSearch} {...props} />;
}

export { mdiLayersSearch as path };
