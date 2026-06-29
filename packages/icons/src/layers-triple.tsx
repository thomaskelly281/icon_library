import { mdiLayersTriple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersTriple(props: IconComponentProps) {
  return <Icon path={mdiLayersTriple} {...props} />;
}

export { mdiLayersTriple as path };
