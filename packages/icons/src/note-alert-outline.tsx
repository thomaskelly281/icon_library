import { mdiNoteAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteAlertOutline} {...props} />;
}

export { mdiNoteAlertOutline as path };
