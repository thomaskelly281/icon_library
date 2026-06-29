import { mdiHdr } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hdr(props: IconComponentProps) {
  return <Icon path={mdiHdr} {...props} />;
}

export { mdiHdr as path };
