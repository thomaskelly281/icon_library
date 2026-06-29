import { mdiLayersMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersMinus(props: IconComponentProps) {
  return <Icon path={mdiLayersMinus} {...props} />;
}

export { mdiLayersMinus as path };
