import { mdiNoteMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteMultiple(props: IconComponentProps) {
  return <Icon path={mdiNoteMultiple} {...props} />;
}

export { mdiNoteMultiple as path };
