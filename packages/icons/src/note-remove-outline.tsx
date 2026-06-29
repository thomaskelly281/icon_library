import { mdiNoteRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NoteRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiNoteRemoveOutline} {...props} />;
}

export { mdiNoteRemoveOutline as path };
