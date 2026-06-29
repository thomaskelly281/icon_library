import { mdiLayersPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersPlus(props: IconComponentProps) {
  return <Icon path={mdiLayersPlus} {...props} />;
}

export { mdiLayersPlus as path };
