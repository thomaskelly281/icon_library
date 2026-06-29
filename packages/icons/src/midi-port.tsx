import { mdiMidiPort } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MidiPort(props: IconComponentProps) {
  return <Icon path={mdiMidiPort} {...props} />;
}

export { mdiMidiPort as path };
