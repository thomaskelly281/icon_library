import { mdiMidi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Midi(props: IconComponentProps) {
  return <Icon path={mdiMidi} {...props} />;
}

export { mdiMidi as path };
