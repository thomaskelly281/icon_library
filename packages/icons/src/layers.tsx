import { mdiLayers } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Layers(props: IconComponentProps) {
  return <Icon path={mdiLayers} {...props} />;
}

export { mdiLayers as path };
