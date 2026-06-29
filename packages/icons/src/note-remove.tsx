import { mdiNoteRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteRemove(props: IconComponentProps) {
  return <Icon path={mdiNoteRemove} {...props} />;
}

export { mdiNoteRemove as path };
