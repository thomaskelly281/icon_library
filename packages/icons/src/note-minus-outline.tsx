import { mdiNoteMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteMinusOutline} {...props} />;
}

export { mdiNoteMinusOutline as path };
