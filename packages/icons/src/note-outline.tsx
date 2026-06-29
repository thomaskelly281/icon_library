import { mdiNoteOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteOutline} {...props} />;
}

export { mdiNoteOutline as path };
