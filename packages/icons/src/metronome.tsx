import { mdiMetronome } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Metronome(props: IconComponentProps) {
  return <Icon path={mdiMetronome} {...props} />;
}

export { mdiMetronome as path };
