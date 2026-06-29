import { mdiNoteMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteMultipleOutline} {...props} />;
}

export { mdiNoteMultipleOutline as path };
