import { mdiNoteSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteSearch(props: IconComponentProps) {
  return <Icon path={mdiNoteSearch} {...props} />;
}

export { mdiNoteSearch as path };
