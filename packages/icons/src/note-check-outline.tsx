import { mdiNoteCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteCheckOutline} {...props} />;
}

export { mdiNoteCheckOutline as path };
