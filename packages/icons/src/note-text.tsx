import { mdiNoteText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteText(props: IconComponentProps) {
  return <Icon path={mdiNoteText} {...props} />;
}

export { mdiNoteText as path };
