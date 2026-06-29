import { mdiNotebookMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookMultiple(props: IconComponentProps) {
  return <Icon path={mdiNotebookMultiple} {...props} />;
}

export { mdiNotebookMultiple as path };
