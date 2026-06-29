import { mdiNoteTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteTextOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteTextOutline} {...props} />;
}

export { mdiNoteTextOutline as path };
