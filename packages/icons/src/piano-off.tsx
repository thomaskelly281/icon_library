import { mdiPianoOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PianoOff(props: IconComponentProps) {
  return <Icon path={mdiPianoOff} {...props} />;
}

export { mdiPianoOff as path };
