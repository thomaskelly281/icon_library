import { mdiHexagon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hexagon(props: IconComponentProps) {
  return <Icon path={mdiHexagon} {...props} />;
}

export { mdiHexagon as path };
