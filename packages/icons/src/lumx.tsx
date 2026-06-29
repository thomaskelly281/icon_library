import { mdiLumx } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lumx(props: IconComponentProps) {
  return <Icon path={mdiLumx} {...props} />;
}

export { mdiLumx as path };
