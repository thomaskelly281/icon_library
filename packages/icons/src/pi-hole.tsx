import { mdiPiHole } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PiHole(props: IconComponentProps) {
  return <Icon path={mdiPiHole} {...props} />;
}

export { mdiPiHole as path };
