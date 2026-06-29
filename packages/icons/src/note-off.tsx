import { mdiNoteOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteOff(props: IconComponentProps) {
  return <Icon path={mdiNoteOff} {...props} />;
}

export { mdiNoteOff as path };
