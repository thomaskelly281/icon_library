import { mdiNoteOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteOffOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteOffOutline} {...props} />;
}

export { mdiNoteOffOutline as path };
