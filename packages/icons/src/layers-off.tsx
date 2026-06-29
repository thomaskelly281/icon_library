import { mdiLayersOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LayersOff(props: IconComponentProps) {
  return <Icon path={mdiLayersOff} {...props} />;
}

export { mdiLayersOff as path };
