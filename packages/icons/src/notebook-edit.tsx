import { mdiNotebookEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookEdit(props: IconComponentProps) {
  return <Icon path={mdiNotebookEdit} {...props} />;
}

export { mdiNotebookEdit as path };
