import { mdiNoteAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteAlert(props: IconComponentProps) {
  return <Icon path={mdiNoteAlert} {...props} />;
}

export { mdiNoteAlert as path };
