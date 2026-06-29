import { mdiOctagon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Octagon(props: IconComponentProps) {
  return <Icon path={mdiOctagon} {...props} />;
}

export { mdiOctagon as path };
