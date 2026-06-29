import { mdiNoteSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteSearchOutline} {...props} />;
}

export { mdiNoteSearchOutline as path };
