import { mdiPentagram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pentagram(props: IconComponentProps) {
  return <Icon path={mdiPentagram} {...props} />;
}

export { mdiPentagram as path };
