import { mdiHexagram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hexagram(props: IconComponentProps) {
  return <Icon path={mdiHexagram} {...props} />;
}

export { mdiHexagram as path };
