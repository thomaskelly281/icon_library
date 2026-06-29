import { mdiNotebookRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookRemove(props: IconComponentProps) {
  return <Icon path={mdiNotebookRemove} {...props} />;
}

export { mdiNotebookRemove as path };
