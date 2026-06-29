import { mdiNoteEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteEditOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteEditOutline} {...props} />;
}

export { mdiNoteEditOutline as path };
