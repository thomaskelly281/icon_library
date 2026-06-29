import { mdiFileUndoOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileUndoOutline(props: IconComponentProps) {
  return <Icon path={mdiFileUndoOutline} {...props} />;
}

export { mdiFileUndoOutline as path };
