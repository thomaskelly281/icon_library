import { mdiNoteCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteCheck(props: IconComponentProps) {
  return <Icon path={mdiNoteCheck} {...props} />;
}

export { mdiNoteCheck as path };
