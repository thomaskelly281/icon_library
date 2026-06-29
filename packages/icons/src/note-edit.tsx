import { mdiNoteEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteEdit(props: IconComponentProps) {
  return <Icon path={mdiNoteEdit} {...props} />;
}

export { mdiNoteEdit as path };
